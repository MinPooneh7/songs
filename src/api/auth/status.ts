import type { User } from "@/type/user";
import axiosInstance from "../base";

export async function getStatus() {
  const { data } = await axiosInstance.get<User>("/auth");

  return data;
}
