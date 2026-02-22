import { useQuery } from "@tanstack/react-query";
import Song from "../components/songs/song";
import { getLike } from "@/api/like/list-like";

export default function Likes() {
  const { isPending, error, data } = useQuery({
    queryKey: ["likes"],
    queryFn: () => getLike(),
  });

  return (
    <div className="flex p-3 bg-linear-to-r from-primary to-secondary overflow-auto h-screen justify-start items-start">
      {data && (
        <div className="flex flex-col gap-2">
          <div className="flex justify-center border rounded-full p-2 items-center text-text">Liked songs</div>
          <div className="gap-2 grid grid-cols-1 lg:grid-cols-5">
            {data.map((like) => (
              <Song
                song={like.song}
                key={like.id}
                heroColor={like.song.artist.heroColor}
              />
            ))}
          </div>
        </div>
      )}
      {isPending && <span>loading...</span>}
      {error && <span>Something went wrong!</span>}
    </div>
  );
}
