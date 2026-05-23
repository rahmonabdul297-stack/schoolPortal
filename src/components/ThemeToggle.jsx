import { useContext } from "react";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { CartContext } from "./context/context";

const ThemeToggle = ({ className = "", compact = false }) => {
  const { dark, setDark } = useContext(CartContext);

  return (
    <button
      type="button"
      onClick={() => setDark((prev) => !prev)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-AppYellow font-[ubuntu-sans-mono-font] font-bold uppercase tracking-wide transition-all duration-300 hover:bg-AppYellow hover:text-AppBlack focus:outline-none focus-visible:ring-2 focus-visible:ring-AppYellow focus-visible:ring-offset-2 ${
        dark
          ? "text-AppCream hover:shadow-[0_0_20px_rgba(217,194,94,0.35)] focus-visible:ring-offset-AppDark"
          : "text-AppBlack focus-visible:ring-offset-AppWhite"
      } ${compact ? "h-10 w-10 p-0" : "px-4 py-2 text-xs sm:text-sm"} ${className}`}
    >
      {dark ? (
        <>
          <CiLight className="text-lg shrink-0" aria-hidden />
          {!compact && <span>Light</span>}
        </>
      ) : (
        <>
          <IoMoonOutline className="text-lg shrink-0" aria-hidden />
          {!compact && <span>Dark</span>}
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
