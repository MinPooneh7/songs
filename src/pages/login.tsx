import { login } from "@/api/auth/login";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  const navigate = useNavigate();
  const { mutate, error } = useMutation({
    mutationFn: () =>
      login({
        email,
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
    <div className="flex flex-col justify-center items-center gap-2 bg-linear-to-r from-purple-500 to-blue-400 w-screen h-screen">
      <form
        className="flex flex-col gap-5 items-center text-4xl bg-white rounded-4xl px-7 py-11 w-120"
        onSubmit={handleSubmit}
      >
        <div className="text-7xl text-black font-bold">LoginPage</div>
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
        <div className="flex flex-col gap-1.5 text-black w-full">
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
              className="absolute right-0 top-1/3 text-gray-500"
              onClick={onShowClick}
              type="button"
            >
              {show ? <Eye /> : <EyeOff />}
            </button>
          </div>
        </div>
        <button className="border rounded-4xl text-white px-7 p-2.5 w-full bg-linear-to-l from-purple-500 to-blue-400">
          Log in
        </button>
        {error && (
          <span className="text-xl text-red-600">
            "Incorrect email or password"
          </span>
        )}
        <div className="text-sm text-black">
          Don't have an account{" "}
          <Link className="text-purple-900 underline" to={"/signup"}>
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
