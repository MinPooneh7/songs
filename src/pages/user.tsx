import useStore from "@/store/use-store";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SettingsAvatar from "@/components/settings-avatar";
import CreatePlayList from "@/components/create-playlist";
import { useQuery } from "@tanstack/react-query";
import { getPlayList } from "@/api/playlist/play-list";
import ThemePicker from "@/components/theme-picker";
import Logout from "@/components/logout";

export default function UserPage() {
  const user = useStore((state) => state.user);
  const navigate = useNavigate();
  const onCreateSuccess = () => refetch();

  const { data, refetch } = useQuery({
    queryKey: ["song"],
    queryFn: () => getPlayList(),
  });

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);
  return (
    <div className="bg-linear-to-r from-primary to-secondary w-screen h-screen flex gap-4 p-17">
      <div className="justify-between max-w-7xl mx-auto bg-gray-300/40 backdrop-blur-2xl border-primary rounded-2xl flex flex-col gap-9 p-7 items-center w-full">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-9 items-center">
              <SettingsAvatar />
              <div className="flex flex-col">
                <div className="text-text font-bold text-4xl">
                  {user?.username}
                </div>
                <div className="text-text">{user?.email}</div>
              </div>
            </div>
            <ThemePicker />
          </div>{" "}
          <div className="border-2 rounded-4xl overflow-clip px-5 py-2 hover:bg-gray-300/40 backdrop-blur-1xl border-primary">
            <Link
              to={"/likes"}
              className="font-bold items-center justify-center text-2xl text-white truncate"
            >
              <p className="truncate w-fit text-text">Liked songs</p>
            </Link>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div className="border-2 rounded-4xl overflow-clip px-5 py-2 hover:bg-gray-300/40 backdrop-blur-2xl border-primary">
              <CreatePlayList onSuccess={onCreateSuccess} />
            </div>

            {data?.playlists.map((playlist, index) => (
              <div
                className="border-2 rounded-4xl overflow-clip px-5 py-2 hover:bg-gray-300/40 backdrop-blur-2xl border-primary"
                key={index}
              >
                <Link
                  to={
                    playlist.playlistTrack.length
                      ? `/playlists/${playlist.id}/songs/${playlist.playlistTrack[0].songId}`
                      : ""
                  }
                  className="font-bold items-center justify-center text-2xl text-white truncate"
                >
                  <p className="truncate w-fit text-text">{playlist.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Logout />
      </div>
    </div>
  );
}
