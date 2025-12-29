import { Link } from "react-router-dom";
import { LuBaggageClaim } from "react-icons/lu";
import { TfiMenu } from "react-icons/tfi";
import { IoIosContact, IoIosContacts, IoMdClose } from "react-icons/io";
import { useState } from "react";
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

const GeneralHeader = () => {
  const [menu, setmenu] = useState(false);
  const handlemenu = () => {
    setmenu((prev) => !prev);
  };
  const [AccDrop, setAccDrop] = useState(false);
  const handleAccDrop = () => {
    setAccDrop((prev) => !prev);
  };
  return (
    <div className="w-full bg-[#F9F8FB] shadow-2xl fixed z-30">
      {/* desktop header */}
      <div className="container hidden lg:flex justify-between items-center">
        {/* logo */}
        <Link to="" className="flex items-center ">
          <img
            src="/public/images/Gemini_Generated_Image_ngyqpzngyqpzngyq-removebg-preview.png"
            alt=""
            className="h-20 w-20 "
          />
          <div className="text-[#c0a742] text-xl capitalize font-black flex flex-col">
            <div className="first-letter:text-4xl first-letter:text-black overflow-hidden">
              shirts arena
            </div>
            <i className="text-[8px] text-black">curate your wardrope!</i>
          </div>
        </Link>
        {/* Desktop navbar */}
        <div className="flex justify-between items-center gap-4 capitalize font-bold text-[#c0a742] ">
          <Link to="/homepage">home</Link>
          <Link to="/about">about us</Link>
          <Link to="/contact">contact</Link>
          <Link to="/product">products</Link>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center">
            <div className="bg-gray-200 p-1 rounded-[50%]">
            
              <IoIosContact />
            </div>
            <div>Account</div>
            <GoTriangleDown onMouseOver={handleAccDrop} />
            <div
              className={
                AccDrop
                  ? "bg-white py-2 fixed right-20  top-20 border flex flex-col items-start capitalize"
                  : "hidden"
              }
            >
              <Link className="hover:bg-[#c0a742] hover:text-white w-full px-2">
                sign up new account
              </Link>
              <Link className="hover:bg-[#c0a742] hover:text-white w-full px-2">
                sign in to account
              </Link>
            </div>
          </div>
          <Link to="/cart" className="text-black flex items-center gap-2">
            <LuBaggageClaim size={30} className="relative" />
            <div className="bg-[#f00] flex items-center justify-center w-4 h-4 rounded-[50%] overflow-hidden  absolute top-6 text-white">
              {"0"}
            </div>
            cart
          </Link>
        </div>
      </div>
      {/* mobile header */}
      <div className="lg:hidden container flex justify-between items-center">
        <Link to="/" className="flex items-center ">
          <img
            src="/public/images/Gemini_Generated_Image_ngyqpzngyqpzngyq-removebg-preview.png"
            alt=""
            className="h-20 w-20 "
          />
          <div className="text-[#c0a742] text-xl capitalize font-black flex flex-col">
            <div className="first-letter:text-4xl first-letter:text-black overflow-hidden">
              shirts arena
            </div>
            <i className="text-[8px] text-black">curate your wardrope!</i>
          </div>
        </Link>

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
            <div className="text-black">Menu</div>
            <Link
              to="/"
              className="hover:text-[#000] flex justify-between gap-4 hover:bg-[#c0a742]"
              onClick={handlemenu}
            >
              <FaHome />
              home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#000]  flex justify-between gap-4 hover:bg-[#c0a742]"
              onClick={handlemenu}
            >
              <FaFile />
              about us
            </Link>{" "}
            <Link
              to="/contact"
              className="hover:text-[#000]  flex justify-between gap-4 hover:bg-[#c0a742]"
              onClick={handlemenu}
            >
              <IoIosContacts />
              contact us
            </Link>{" "}
            <Link
              to="/product"
              className="hover:text-[#000]  flex justify-between gap-4 hover:bg-[#c0a742]"
              onClick={handlemenu}
            >
              <MdOutlineProductionQuantityLimits />
              product
            </Link>{" "}
            <Link
              to="/cart"
              className="hover:text-[#000]  flex justify-between gap-4 hover:bg-[#c0a742]"
              onClick={handlemenu}
            >
              <TiShoppingCart />
              cart
            </Link>
            <div className="flex flex-col gap-3.5">
              <div className="font-bold uppercase  text-black">follow us:</div>
              <div className="flex justify-between gap-3">
                <Link className="flex items-center gap-3 text-[#c0a742] hover:text-white capitalize ">
                  {" "}
                  <FaFacebook />
                </Link>

                <Link className="flex items-center gap-3 text-[#c0a742] hover:text-white capitalize ">
                  {" "}
                  <FaXTwitter />
                </Link>

                <Link className="flex items-center gap-3 text-[#c0a742] hover:text-white capitalize ">
                  {" "}
                  <FaYoutube />
                </Link>

                <Link className="flex items-center gap-3 text-[#c0a742] hover:text-white capitalize ">
                  {" "}
                  <FaSquareInstagram />
                </Link>

                <Link className="flex items-center gap-3 text-[#c0a742] hover:text-white capitalize ">
                  {" "}
                  <AiFillTikTok />
                </Link>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralHeader;
