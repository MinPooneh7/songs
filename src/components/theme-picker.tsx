import { Link } from "react-router-dom";

export default function ThemePicker() {
  return (
    <div className="flex flex-col items-end">
      <div className="w-110 h-15 py-2 ">
        <span className="flex font-bold items-center justify-center text-4xl text-white">
          Themes
        </span>
      </div>
      <div className="border-2 w-110 h-15 py-2 hover:bg-red-300">
        <Link
          to={""}
          className="flex font-bold items-center justify-center text-4xl text-red-600 "
        >
          Red
        </Link>
      </div>
      <div className="border-2 w-110 h-15 py-2 hover:bg-blue-300">
        <Link
          to={""}
          className="flex font-bold items-center justify-center text-4xl text-blue-600"
        >
          Blue
        </Link>
      </div>
      <div className="border-2 w-110 h-15 py-2 hover:bg-green-300">
        <Link
          to={""}
          className="flex font-bold items-center justify-center text-4xl text-green-600"
        >
          Green
        </Link>
      </div>
      <div className="border-2 w-110 h-15 py-2 hover:bg-yellow-300">
        <Link
          to={""}
          className="flex font-bold items-center justify-center text-4xl text-yellow-600"
        >
          Yellow
        </Link>
      </div>
      <div className="border-2 w-110 h-15 py-2 hover:bg-pink-300">
        <Link
          to={""}
          className="flex font-bold items-center justify-center text-4xl text-pink-600"
        >
          Pink
        </Link>
      </div>
      <div className="border-2 w-110 h-15 py-2 hover:bg-purple-300">
        <Link
          to={""}
          className="flex font-bold items-center justify-center text-4xl text-purple-600"
        >
          Purple
        </Link>
      </div>
    </div>
  );
}
