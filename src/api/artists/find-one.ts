import type { Artist } from "../../type/artist";
import axiosInstance from "../base";

export async function findOneArtist(id:string) {
  const { data } = await axiosInstance.get<Artist>(`/artists/${id}`);

  return data;
}
