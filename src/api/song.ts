import type { Song } from "@/type/artist";
import axiosInstance from "./base";

export async function getSong(id: string) {
  const { data } = await axiosInstance.get<Song>(`/songs/${id}`);

  return data;
}
