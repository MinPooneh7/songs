import { signup } from "@/api/auth/signup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const onEmailSet = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setEmail(e.target.value);
  };
  const onPasswordSet = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setPassword(e.target.value);
  };
  const onUsernameSet = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setUsername(e.target.value);
  };
  const navigate = useNavigate();
  const { mutate, error } = useMutation({
    mutationFn: () =>
      signup({
        email,
        username,
        password,
      }),
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  const [show, setShow] = useState(false);

  const onShowClick = () => setShow((prev) => !prev);

  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-linear-to-r from-[#4d276b] to-[#fc4747] w-screen h-screen">
      <form
        className="flex flex-col gap-5 items-center text-4xl bg-white rounded-4xl px-7 py-11 w-120"
        onSubmit={handleSubmit}
      >
        <div className="text-7xl text-black font-bold px-20"> Sign up </div>
        <div className="flex flex-col gap-1.5 text-black w-full mt-7">
          Email:
          <div className="flex gap-2 items-center text-gray-500">
            <Mail />
            <input
              className="border-b focus:outline-0 placeholder:text-gray-500 text-lg w-full"
              placeholder="Enter your email"
              value={email}
              onChange={onEmailSet}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 text-black w-full mt-7">
          Username:
          <div className="flex gap-2 items-center text-gray-500">
            <User />
            <input
              className="border-b focus:outline-0 placeholder:text-gray-500 text-lg w-full"
              placeholder="Enter your username"
              value={username}
              onChange={onUsernameSet}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 text-black w-full mt-7">
          Password:
          <div className="w-full relative flex gap-2 items-center text-gray-500">
            <Lock />
            <input
              className="border-b  focus:outline-0 placeholder:text-gray-500 text-lg w-full"
              placeholder="Enter your password"
              value={password}
              onChange={onPasswordSet}
              type={show ? "text" : "password"}
            />
            <button
              type="button"
              className="absolute right-0 top-1/3 text-gray-500"
              onClick={onShowClick}
            >
              {show ? <Eye /> : <EyeOff />}
            </button>
          </div>
        </div>
        <button className="border rounded-4xl text-white px-7 p-2.5 w-full bg-linear-to-l from-[#4d276b] to-[#fc4747]">
          Sign up
        </button>
        {error && axios.isAxiosError(error) && (
          <span className="text-xl whitespace-pre text-red-600">
            {error.response?.data?.message.join("\n")}
          </span>
        )}
      </form>
    </div>
  );
}
