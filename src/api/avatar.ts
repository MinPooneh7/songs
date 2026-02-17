import type { User } from "@/type/user";
import axiosInstance from "./base";

export async function avatar(file: File) {
  const { data } = await axiosInstance.patch<Response>(
    "/users/avatar",
    { file },
    { headers: { "Content-Type": "multipart/form-data" } }, // behesh begim ke darim file mifrestim ke vaghran befreshte, age nazarim ferestade nemishe
  );

  return data;
}

interface Response {
  message: string;
  avatarUrl: string;
  user: User;
}
