import type { Song } from "@/type/artist";
import axiosInstance from "./base";

export async function getSong(id: string, playlistId?: string) {
  const searchParams = new URLSearchParams();
  if (playlistId) {
    searchParams.append("playlistId", playlistId);
  }
  const { data } = await axiosInstance.get<Song>(
    `/songs/${id}?${searchParams.toString()}`,
  );

  return data;
}
