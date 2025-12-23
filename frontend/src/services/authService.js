import apiClient from "./apiClient";

export const signupUser = async (data) => {
  const res = await apiClient.post("/auth/signup", data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await apiClient.post("/auth/login", data);

  // Agar login successful ho to token save karo
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }

  return res.data;
};


export const logoutUser = async () => {
  const res = await apiClient.post("/auth/logout");
  return res.data;
};

export const checkAuth = async () => {
  const res = await apiClient.get("/auth/checkAuth");
  return res.data;
};
