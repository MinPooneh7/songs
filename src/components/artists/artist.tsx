import { Link } from "react-router-dom";
import type { Artist } from "../../type/artist";

export default function Artist({ artist }: { artist: Artist }) {
  return (
    <Link to={`/artists/${artist.id}`} className="flex flex-col hover:p-5 hover:duration-150">
      <div className="flex flex-col gap-4 h-full border rounded-3xl p-2.5 bg-black hover:ring-4 ring-white/50">
        <img
          className="object-cover h-full rounded-3xl  "
          src={artist.imageUrl}
        />
        <div className="text-white text-4xl">{artist.name}</div>
        <div className="text-gray-500 text-1xl">{artist.activeYears}</div>
      </div>
    </Link>
  );
}
