import { Link, useLocation } from "react-router-dom";
import { LuBaggageClaim } from "react-icons/lu";
import { TfiMenu } from "react-icons/tfi";
import {
  IoIosContact,
  IoIosContacts,
  IoIosMoon,
  IoMdClose,
} from "react-icons/io";
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
import { CiLight, CiSettings } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

const GeneralHeader = () => {
  const [menu, setmenu] = useState(false);
  const [showSettings, setshowSettings] = useState(false);
  const [selected, setSelected] = useState(1);
  const { state } = useLocation();
  const handlemenu = () => {
    setmenu((prev) => !prev);
  };
  const [AccDrop, setAccDrop] = useState(false);
  const handleAccDrop = () => {
    setAccDrop((prev) => !prev);
  };
  const { Changebg, setDark, dark } = useContext(CartContext);

  return (
    <div
      className={`w-full ${dark ? "bg-AppBlack" : "bg-AppWhite "} py-2 fixed shadow-2xl`}
    >
      {/* desktop header */}
      <div className="container hidden lg:flex justify-between items-center">
        {/* logo */}
        <Logo />
        {/* Desktop navbar */}
        <div
          className={`flex justify-between items-center text-[14px] gap-4 capitalize font-bold  ${dark ? "text-AppWhite" : "text-AppBlack"}`}
        >
          {navbar.map((itm) => (
            <Link
              to={itm.url}
              key={itm.id}
              className={selected === itm.id ? "text-AppYellow underline" : ""}
              onClick={() => setSelected(itm.id)}
            >
              {itm.nav}
            </Link>
          ))}
          <BsThreeDotsVertical size={20} onClick={()=>setshowSettings((prev)=>!prev)}/>
          <div
            className={showSettings?`fixed right-0 top-20 p-4 border-l-4 border-l-AppBlack ${dark ? "bg-AppBlack text-AppWhite" : "bg-AppWhite text-AppBlack"}`:"hidden"}
            onClick={()=>setDark((prev)=>!prev)}
          >
            {dark ? (
              <div className="flex items-center gap-2 px-3">
                <IoMoonOutline />
                <span>dark mode</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3">
                <CiLight />
                <span>light mode</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* mobile header */}
      <div className="lg:hidden container flex justify-between items-center">
        <Logo />

        <div
          className={`${dark ? "border p-2 rounded-lg text-AppWhite" : "border p-2 rounded-lg"}`}
          onClick={handlemenu}
        >
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
                ? "w-[70%] bg-AppWhite text-AppYellow h-full border slideout flex flex-col justify-between items-start gap-4  font-bold text-xl uppercase pb-28 px-6"
                : "hidden"
            }
          >
            <div className="flex flex-col gap-3 py-5">
              {navbar.map((itm) => (
                <Link to={itm.url} key={itm.id} onClick={handlemenu}>
                  {itm.nav}
                </Link>
              ))}
            </div>
            <div className="w-full ">
              <div className="text-sm flex justify-between items-center text-AppBlack mb-0 border-t border-AppBlack py-2">
                <div
                  className="flex items-center gap-2"
                  onClick={() => setshowSettings((prev) => !prev)}
                >
                  <CiSettings size={30} />
                  <span>settings</span>
                </div>
                <GoTriangleDown />
              </div>
              <div
                className={
                  showSettings
                    ? "flex items-center gap-1 text-xs text-AppBlack"
                    : "hidden"
                }
                onClick={() => setDark((prev) => !prev)}
              >
                {dark ? (
                  <div className="flex items-center gap-2 px-3">
                    <IoMoonOutline />
                    <span>dark mode</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 px-3">
                    <CiLight />
                    <span>light mode</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralHeader;
