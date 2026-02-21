import useStore from "@/store/use-store";
import Profile from "@/assets/profile.jpg";
import { Link } from "react-router-dom";
import Search from "./search";

export default function Header() {
  const user = useStore((state) => state.user);

  return (
    <div className=" flex justify-between items-center w-full px-3">
      {user ? (
        <Link to="/user" className="flex gap-2 items-center p-2 w-full">
          <img
            className="border rounded-full w-15 h-15"
            src={user.avatar || Profile}
          />
          <div className="flex flex-col items-center justify-center text-text">
            <div className="text-2xl"> {user?.username}</div>
          </div>
        </Link>
      ) : (
        <div className="w-full">
          <Link to={"/login"} className="text-2xl font-bold text-text">
            Login
          </Link>
        </div>
      )}
      <Search />
      <div className="w-full"></div>
    </div>
  );
}
