import { Outlet } from "react-router-dom";
import { useContext } from "react";
import GeneralFooter from "../components/GeneralFooter";
import GeneralHeader from "../components/GeneralHeader";
import { CartContext } from "../components/context/context";

const GeneralLayout = () => {
  const { dark } = useContext(CartContext);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "bg-AppDark text-AppCream" : "bg-AppWhite text-AppBlack"
      }`}
    >
      <GeneralHeader />
      <Outlet />
      <GeneralFooter />
    </div>
  );
};

export default GeneralLayout;
