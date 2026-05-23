import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const AppContextProvider = ({ children }) => {
  const [picked, setpicked] = useState();
  const [Changebg, setChangebg] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("ayodele-theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("ayodele-theme", dark ? "dark" : "light");
    document.documentElement.classList.toggle("dark-theme", dark);
    document.body.classList.toggle("dark-theme", dark);
  }, [dark]);

  return (
    <CartContext.Provider
      value={{ picked, setpicked, Changebg, setChangebg, dark, setDark }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default AppContextProvider;
