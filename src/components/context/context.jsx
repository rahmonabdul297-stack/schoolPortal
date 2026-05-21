import { createContext, useState } from "react";
export const CartContext = createContext();
const AppContextProvider = ({ children }) => {
  const [picked, setpicked] = useState();
  const [Changebg, setChangebg] = useState(false);
  
  return (
    <CartContext.Provider value={{ picked, setpicked, Changebg, setChangebg }}>
      {children}
    </CartContext.Provider>
  );
};

export default AppContextProvider;
