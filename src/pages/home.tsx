import { useQuery } from "@tanstack/react-query";
import { findAllArtists } from "../api/artists/find-all";

import Artist from "../components/artists/artist";
import Search from "@/components/search";

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["artists"],
    queryFn: () => findAllArtists(),
  });

  return (
    <div className="flex flex-col bg-gray-500 items-end p-4">
      <div>
        <Search />
      </div>
      {data && (
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 p-2 bg-gray-500">
          {data.map((artist) => (
            <Artist artist={artist} key={artist.id} />
          ))}
        </div>
      )}
      {isPending && <span>loading...</span>}
      {error && <span>Something went wrong!</span>}
    </div>
  );
}
