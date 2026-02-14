import type { Artist } from "../../type/artist";

export default function Artist({ artist }: { artist: Artist }) {
  return (
    <div className="h-full">
      <img className="object-cover h-full" src={artist.imageUrl} />
    </div>
  );
}
