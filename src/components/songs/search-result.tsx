import type { Song } from "@/type/artist";
export default function SearchResult({ song }: { song: Song }) {
  return (
    <div className="flex gap-1.5 bg-gray-950 rounded-2xl p-1">
      <div>
        <img className="w-12 rounded-2xl" src={song.coverUrl} />
      </div>
      <div className="flex flex-col">
        <div className="text-white">{song.title}</div>
        <div className="text-gray-400">{song.artist.name}</div>
      </div>
    </div>
  );
}
