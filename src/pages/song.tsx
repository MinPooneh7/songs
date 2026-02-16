import { getSong } from "@/api/song";
import MusicPlayer from "@/components/songs/player";
import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";

export default function SongDetails() {
  const { songId } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["song", songId],
    queryFn: () => getSong(songId!),
  });

  return (
    <div className="bg-gray-600 h-screen overflow-auto">
      {data && (
        <div className="flex flex-col gap-4 items-center p-7">
          <div className="text-white text-xl">{data.artist.shortBio}</div>
          <div className="flex flex-col gap-2 p-9 rounded-xl border bg-white">
            <div className="flex flex-col">
              <img
                className="w-120 border border-black rounded-4xl"
                src={data.coverUrl}
              />
            </div>
            <div className="text-black text-4xl">{data.title}</div>
            <div className="text-black text-2xl">{data.artist.name}</div>

            <div className="flex flex-col">
              <MusicPlayer audioSrc={data.previewUrl} />
            </div>
          </div>
        </div>
      )}
      {isPending && <span>loading...</span>}
      {error && <span>Something went wrong!</span>}
    </div>
  );
}
