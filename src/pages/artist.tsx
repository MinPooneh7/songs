import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { findOneArtist } from "../api/artists/find-one";
import Song from "../components/songs/song";

export default function ArtistPage() {
  const { artistId } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["artist", artistId],
    queryFn: () => findOneArtist(artistId!),
  });

  return (
    <div className="flex p-3 bg-linear-to-r from-primary to-secondary overflow-auto h-screen justify-start items-start">
      {data && (
        <div className="flex flex-col gap-2">
          <div className="border rounded-full p-2">
            <div className="flex gap-7 items-center border rounded-full p-2 h-full w-full bg-gray-300/40 backdrop-blur-2xl border-gray-100">
              <img
                className="border rounded-full w-35 h-35"
                src={data.imageUrl}
              />
              <div className="flex flex-col items-center justify-center text-text">
                <div className="text-6xl"> {data.name}</div>
                <div className="text-xl text-nowrap"> {data.activeYears} </div>
              </div>
              <div className="leading-loose text-lg text-text">{data.description}</div>
            </div>
          </div>
          <div className="gap-2 grid grid-cols-1 lg:grid-cols-5">
            {data.songs.map((song) => (
              <Song song={song} key={song.id} heroColor={data.heroColor} />
            ))}
          </div>
        </div>
      )}
      {isPending && <span>loading...</span>}
      {error && <span>Something went wrong!</span>}
    </div>
  );
}
