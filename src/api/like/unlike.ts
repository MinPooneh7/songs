import axiosInstance from "../base";

export async function unlike(id: string) {
  const { data } = await axiosInstance.patch(`/songs/${id}/unlikes`);

  return data;
}
