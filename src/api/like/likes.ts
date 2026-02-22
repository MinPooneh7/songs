import axiosInstance from "../base";

export async function like(id: string) {
  const { data } = await axiosInstance.patch(`/songs/${id}/likes`);

  return data;
}
