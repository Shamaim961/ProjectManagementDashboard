const BASE_URL = import.meta.env.VITE_API_URL;

export const getProjectsService = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
  if (!res.ok) throw await res.json();
  return await res.json();
};

export const createProjectService = async (data) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw await res.json();
  return await res.json();
};

// updateProjectService and deleteProjectService same pattern

