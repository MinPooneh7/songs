import axiosInstance from "../base";

export async function login(payload: Payload) {
  const { data } = await axiosInstance.post("/auth/login", payload);

  return data;
}

interface Payload {
  email: string;
  password: string;
}
