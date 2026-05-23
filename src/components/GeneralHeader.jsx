import { Link, useLocation } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/context";
import Logo from "./logo/logo";
import { navbar } from "./Arrays/array";
import ThemeToggle from "./ThemeToggle";

const GeneralHeader = () => {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();
  const { dark } = useContext(CartContext);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const navLinkClass = (url) => {
    const active =
      pathname === url || (url === "/homepage" && pathname === "/");
    return active
      ? "text-AppYellow underline underline-offset-4"
      : "hover:text-AppYellow transition-colors duration-200";
  };

  return (
    <header
      className={`w-full py-2 z-1000 fixed top-0 left-0  shadow-lg border-b ${
        dark
          ? "bg-AppDark/95 backdrop-blur-md border-AppYellow/25 text-AppCream"
          : "bg-AppWhite border-AppYellow/30 text-AppBlack"
      }`}
    >
      <div className="container hidden lg:flex justify-between items-center gap-4">
        <Logo />

        <nav
          className="flex flex-wrap justify-center items-center text-[13px] xl:text-[14px] gap-3 xl:gap-4 capitalize font-bold font-[ubuntu-sans-mono-font]"
          aria-label="Main navigation"
        >
          {navbar.map((itm) => (
            <Link
              to={itm.url}
              key={itm.id}
              target={itm.target || undefined}
              rel={itm.target === "_blank" ? "noopener noreferrer" : undefined}
              className={navLinkClass(itm.url)}
            >
              {itm.nav}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>

      <div className="lg:hidden container flex justify-between items-center gap-3">
        <Logo />

        <div className="flex items-center gap-2">
          <ThemeToggle compact />
          <button
            type="button"
            onClick={() => setMenu((prev) => !prev)}
            aria-expanded={menu}
            aria-label={menu ? "Close menu" : "Open menu"}
            className={`border-2 border-AppYellow rounded-lg p-2 transition-colors ${
              dark ? "text-AppCream" : "text-AppBlack"
            }`}
          >
            {menu ? <IoMdClose size={22} /> : <TfiMenu size={22} />}
          </button>
        </div>
      </div>

      {menu && (
        <div
          className="lg:hidden fixed inset-0 top-20 z-[99] bg-black/50"
          onClick={() => setMenu(false)}
          aria-hidden
        />
      )}

      <nav
        className={`lg:hidden fixed top-20 right-0 z-[100] h-[calc(100vh-56px)] w-[min(85%,320px)] border-l-2 border-AppYellow slideout flex flex-col ${
          menu ? "translate-x-0" : "translate-x-full pointer-events-none"
        } transition-transform duration-300 ${
          dark ? "bg-AppDarkElevated text-AppCream" : "bg-AppWhite text-AppBlack"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-1 p-6 overflow-y-auto flex-1 font-[ubuntu-sans-mono-font] font-bold uppercase text-base">
          {navbar.map((itm) => (
            <Link
              to={itm.url}
              key={itm.id}
              target={itm.target || undefined}
              rel={itm.target === "_blank" ? "noopener noreferrer" : undefined}
              onClick={() => setMenu(false)}
              className={`py-3 border-b ${
                dark ? "border-AppMuted/25" : "border-AppBlack/10"
              } ${navLinkClass(itm.url)}`}
            >
              {itm.nav}
            </Link>
          ))}
        </div>

        <div
          className={`p-6 border-t-2 border-AppYellow ${
            dark ? "bg-AppDarkMuted" : "bg-AppYellow/10"
          }`}
        >
          <p className="text-xs uppercase tracking-wide opacity-70 mb-3">
            Appearance
          </p>
          <ThemeToggle className="w-full justify-center" />
        </div>
      </nav>
    </header>
  );
};

export default GeneralHeader;
