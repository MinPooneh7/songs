import type { PlayList } from "@/type/play-list";
import axiosInstance from "../base";

export async function addPlayList(playlistId: string, songId: string) {
  const { data } = await axiosInstance.post<PlayList>(
    `/playlists/${playlistId}/track/${songId}`,
  );

  return data;
}
