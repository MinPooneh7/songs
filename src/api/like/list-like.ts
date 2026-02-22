import type { Song } from "@/type/artist";
import axiosInstance from "../base";

export async function like() {
  const { data } = await axiosInstance.get<Song[]>(`/songs/likes`);

  return data;
}

