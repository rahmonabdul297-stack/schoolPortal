import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/context";

const FooterLogo = () => {
  const { dark } = useContext(CartContext);
  return (
    <div className="font-serif">
      <Link to="/" className="flex gap-3 items-center ">
        <img
          src="/images/ayodele logo.webp"
          alt=""
          className="h-16 w-16 rounded-[50%]"
        />
        <div className={`${dark ? "text-AppCream" : " text-AppCream"} flex flex-col text-[14px] font-black uppercase text-center overflow-hidden`}>
          <span>
            Ayodele nursery &
          </span>
          <span> Primary school</span>
        </div>
      </Link>
    </div>
  );
};

export default FooterLogo;
