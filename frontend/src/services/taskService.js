const BASE_URL = import.meta.env.VITE_API_URL;

export const getTasksService = async (projectId) => {
  const token = localStorage.getItem("token");
  const query = projectId ? `?projectId=${projectId}` : "";
  const res = await fetch(`${BASE_URL}/tasks${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
  if (!res.ok) throw await res.json();
  return await res.json();
};

export const createTaskService = async (data) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}/tasks`, {
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

// updateTaskService and deleteTaskService same pattern with Authorization header

