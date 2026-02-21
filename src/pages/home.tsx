import { useQuery } from "@tanstack/react-query";
import { findAllArtists } from "../api/artists/find-all";

import Artist from "../components/artists/artist";
import Header from "@/components/header";

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["artists"],
    queryFn: () => findAllArtists(),
  });

  return (
    <div className="flex flex-col bg-linear-to-r from-primary to-secondary overflow-auto">
      <div className="flex flex-col gap-4 w-screen h-screen items-end p-5">
        <Header />
        {data && (
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 p-2">
            {data.map((artist) => (
              <Artist artist={artist} key={artist.id} />
            ))}
          </div>
        )}
        {isPending && <span>loading...</span>}
        {error && <span>Something went wrong!</span>}
      </div>
    </div>
  );
}
