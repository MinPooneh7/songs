import axiosInstance from "../base";

export async function logout() {
  const { data } = await axiosInstance.post("/auth/logout");

  return data;
}