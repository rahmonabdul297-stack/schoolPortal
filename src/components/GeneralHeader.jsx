import { Link, useLocation } from "react-router-dom";
import { LuBaggageClaim } from "react-icons/lu";
import { TfiMenu } from "react-icons/tfi";
import { IoIosContact, IoIosContacts, IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import {
  FaFacebook,
  FaFile,
  FaSquareInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { CartContext } from "./context/context";
import Logo from "./logo/logo";
import { navbar } from "./Arrays/array";

const GeneralHeader = () => {
  const [menu, setmenu] = useState(false);
  const [selected, setSelected] = useState(1);
  const { state } = useLocation();
  const handlemenu = () => {
    setmenu((prev) => !prev);
  };
  const [AccDrop, setAccDrop] = useState(false);
  const handleAccDrop = () => {
    setAccDrop((prev) => !prev);
  };
  const { Changebg } = useContext(CartContext);
  return (
    <div className="w-full bg-white py-2 fixed shadow-2xl">
      {/* desktop header */}
      <div className="container hidden lg:flex justify-between items-center">
        {/* logo */}
        <Logo />
        {/* Desktop navbar */}
        <div className="flex justify-between items-center text-[14px] gap-4 capitalize font-bold  text-black">
          {navbar.map((itm) => (
            <Link
              to={itm.url}
              key={itm.id}
              className={selected === itm.id ? "text-[#c0a742] underline" : ""}
              onClick={() => setSelected(itm.id)}
            >
              {itm.nav}
            </Link>
          ))}
        </div>
      </div>
      {/* mobile header */}
      <div className="lg:hidden container flex justify-between items-center">
        <Logo />

        <div className="border p-2 rounded-lg" onClick={handlemenu}>
          {menu ? <IoMdClose /> : <TfiMenu />}
        </div>
        <div
          className={
            menu
              ? "bg-white/55 h-screen w-[100%] mx-auto fixed top-20 left-0 flex justify-end"
              : "hidden"
          }
        >
          <div
            className={
              menu
                ? "w-[70%] bg-white text-[#c0a742] h-full border slideout flex flex-col items-start  gap-4  font-bold text-xl uppercase p-10"
                : "hidden"
            }
          >
            {navbar.map((itm) => (
              <Link to={itm.url} key={itm.id}>
                {itm.nav}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralHeader;
