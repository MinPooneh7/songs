import { findSong } from "@/api/songs/find-song";
import { useDebounce } from "@/hooks/use-debounce";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SearchResult from "./songs/search-result";

export default function Search() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 800);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const { isFetching, error, data } = useQuery({
    queryKey: ["search-song", debouncedSearch],
    queryFn: () => findSong(debouncedSearch),
    enabled: !!debouncedSearch,
  });

  return (
    <div>
      <input
        className="border px-1.5 py border-black rounded-md"
        value={search}
        onChange={handleChange}
      />
      {data && (
        <div>
          {data.results.map((song) => (
            <SearchResult song={song} key={song.id} />
          ))}
          {data.results.length===0 && <span>Song not found!</span>}
        </div>
      )}
      {isFetching && <span>loading...</span>}
      {error && <span>erorrr!</span>}
    </div>
  );
}
