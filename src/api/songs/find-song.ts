import type { Song } from "@/type/artist";
import axiosInstance from "../base";

export async function findSong(title: string) {
  const { data } = await axiosInstance.get<Response>(`/songs?q=${title}`);

  return data;
}

interface Response {
  results: Song[];
}
