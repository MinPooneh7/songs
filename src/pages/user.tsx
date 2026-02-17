import useStore from "@/store/use-store";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ThemePicker from "@/components/theme-picker";
import SettingsAvatar from "@/components/settings-avatar";

export default function UserPage() {
  const user = useStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);
  return (
    <div className="bg-linear-to-t from-gray-950 to-gray-600 w-screen h-screen flex gap-4">
      <div className="flex flex-col gap-9 p-7 items-start w-full">
        <div className="flex gap-9 items-center">
          <SettingsAvatar />
          <div className="flex flex-col">
            <div className="text-white font-bold text-4xl">
              {user?.username}
            </div>
            <div className="text-white">{user?.email}</div>
          </div>
        </div>
        <div className="border-2 w-110 h-15 py-2 hover:bg-gray-500">
          <Link
            to={""}
            className="flex font-bold items-center justify-center text-4xl text-white"
          >
            Liked songs
          </Link>
        </div>
      </div>
      <div className="p-5">
        <ThemePicker />
      </div>
    </div>
  );
}
