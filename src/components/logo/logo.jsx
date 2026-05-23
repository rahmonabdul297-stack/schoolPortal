import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/context";

const Logo = () => {
  const {dark}=useContext(CartContext)
  return (
    <div>
      <Link to="/" className="flex gap-3 items-center ">
        <img
          src="/images/ayodele logo.webp"
          alt=""
          className="h-16 w-16 rounded-[50%]"
        />
        <div className="flex flex-col text-xl font-black uppercase overflow-hidden">
          <span className={dark ? "text-AppCream" : "text-AppBlack"}>Ayodele</span>
          <span className="text-AppYellow">schools</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
