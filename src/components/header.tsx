import useStore from "@/store/use-store";
import Search from "./search";

export default function Header() {
  const user = useStore((state) => state.user);

  return (
    <div className="border rounded-2xl bg-amber-100 w-full h-full">
      <Search />
    </div>
  );
}
