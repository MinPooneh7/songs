import { useQuery } from "@tanstack/react-query";
import { findAllArtists } from "../api/artists/find-all";

import Artist from "../components/artists/artist";

export default function Home() {
  const { isPending, data } = useQuery({
    queryKey: ["artists"],
    queryFn: () => findAllArtists(),
  });

  return (
    <div>
      {data && (
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-3">
          {data.map((artist) => (
            <Artist artist={artist} key={artist.id} />
          ))}
        </div>
      )}
    </div>
  );
}
