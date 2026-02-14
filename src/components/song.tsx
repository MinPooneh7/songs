import { Link } from "react-router-dom";
import type { Song } from "../type/artist";

export default function Artist({ song }: { song: Song }) {
  return (
    <Link
      to={`/artists/${song.id}`}
      className="flex flex-col gap-4 h-full border rounded-3xl p-2.5 bg-black hover:ring-4 ring-white/50"
    >
      <img className="object-cover h-full rounded-3xl" src={song.coverUrl} />
      <div className="text-white text-2xl text-center">{song.title}</div>
    </Link>
  );
}
