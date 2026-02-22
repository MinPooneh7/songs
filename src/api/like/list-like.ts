import type { Like } from "@/type/artist";
import axiosInstance from "../base";

export async function getLike() {
  const { data } = await axiosInstance.get<Like[]>(`/songs/likes`);

  return data;
}
