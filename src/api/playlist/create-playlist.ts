import type { PlayList } from "@/type/play-list";
import axiosInstance from "../base";

export async function createPlayList(name :string) {
  const { data } = await axiosInstance.post<PlayList>(`/playlists`, {name});

  return data;
}
