import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { findOneArtist } from "../api/artists/find-one";
import Song from "../components/song"

export default function ArtistPage() {
  const { artistId } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["artist"],
    queryFn: () => findOneArtist(artistId!),
  });

  return (
    <div className="flex p-3 bg-gray-500 overflow-auto h-screen justify-start items-start">
      {data && (
        <div className="flex flex-col gap-2">
          <div className="flex gap-7 items-center">
            <img
              className="border rounded-full w-40 h-40 "
              src={data.imageUrl}
            />
            <div className="flex flex-col items-center justify-center">
              <div className="text-6xl"> {data.name}</div>
              <div className="text-xl text-nowrap"> {data.activeYears} </div>
            </div>
            <div className="leading-loose text-lg">{data.description}</div>
          </div>
          <div className="gap-2 grid grid-cols-1 lg:grid-cols-5">{data.songs.map((song)=>(
            <Song song={song} key={song.id} />
          ))}</div>
        </div>
      )}
    </div>
  );
}
