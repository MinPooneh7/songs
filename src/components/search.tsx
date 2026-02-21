import { findSong } from "@/api/songs/find-song";
import { useDebounce } from "@/hooks/use-debounce";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SearchResult from "./songs/search-result";
import { Search as SearchIcon } from "lucide-react";

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
    <div className="relative">
      <SearchIcon className="absolute right-2 top-1/5 text-text" />
      <input
        className="border border-text rounded-full py-2 px-3 w-70 hover:ring-10 ring-primary "
        value={search}
        onChange={handleChange}
      />
      {data && (
        <div className="absolute z-100 flex flex-col py-2 bg-primary rounded-3xl px-2">
          {data.results.map((song) => (
            <SearchResult song={song} key={song.id} />
          ))}
          {data.results.length === 0 && <span>Song not found!</span>}
        </div>
      )}
      {isFetching && <span>loading...</span>}
      {error && <span>erorrr!</span>}
    </div>
  );
}
