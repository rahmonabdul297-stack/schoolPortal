import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();
const AppContextProvider = ({ children }) => {
  const [picked, setpicked] = useState();
  const [dark, setDark] = useState(false);
  const [Changebg, setChangebg] = useState(false);
   useEffect(()=>{
    localStorage.setItem("dark",dark)
   },[])
     useEffect(()=>{
    localStorage.getItem("dark",dark)
   },[])
  return (
    <CartContext.Provider value={{ picked, setpicked, Changebg, setChangebg,dark, setDark }}>
      {children}
    </CartContext.Provider>
  );
};

export default AppContextProvider;
