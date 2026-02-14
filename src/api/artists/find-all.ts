import type { Artist } from "../../type/artist";
import axiosInstance from "../base";

export async function findAllArtists() {
  const { data } = await axiosInstance.get<Artist[]>("/artists/");

  return data;
}
