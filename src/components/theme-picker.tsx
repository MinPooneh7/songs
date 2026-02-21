import { useTheme } from "next-themes";

const themeColors = {
  base: "#000",
  green: "#0f0",
  blue: "#00f",
  red:"#f00",
  orange: "#f27d07",
  pink:"#faa",
  purple:"#961d80"
};

export const THEMES = Object.keys(themeColors);

export default function ThemePicker() {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-col items-end">
      <div className="w-110 h-15 py-2 ">
        <span className="flex font-bold items-center justify-center text-4xl text-white">
          Themes
        </span>
      </div>
      {THEMES.map((theme, index) => (
        <div className="border-2 w-110 h-15 py-2 border-primary" key={index}>
          <button
            className="flex font-bold items-center justify-center text-4xl"
            style={{ color: themeColors[theme as keyof typeof themeColors] }}
            onClick={() => setTheme(theme)}
          >
            {theme}
          </button>
        </div>
      ))}
    </div>
  );
}
