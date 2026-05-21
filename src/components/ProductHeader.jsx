import { Link } from "react-router-dom";
import { LuBaggageClaim } from "react-icons/lu";
import { TfiMenu } from "react-icons/tfi";
import { IoIosContact, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

const ProductHeader = () => {
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
            <i className="text-[8px] text-black">curate your wardrobe!</i>
          </div>
        </Link>
        {/* Desktop navbar */}
        <div className="bg-gray-100 flex justify-between items-center gap-4 w-[600px] m-auto   text-[#c0a742] border rounded-lg">
          <input
            type="text"
            placeholder="search products"
            className="outline-[#c0a742] w-full  px-4 py-2 rounded-lg"
          />
          <div className="bg-[#c0a742] text-white lg:w-[20%] px-4 py-2 text-center uppercase">
            search
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center">
            <div className="bg-gray-200 p-1 rounded-[50%]">
              <img src="" alt="" />
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
        <div className="flex items-center ">
          <img
            src="/public/images/Gemini_Generated_Image_ngyqpzngyqpzngyq-removebg-preview.png"
            alt=""
            className="h-20 w-20 "
          />
          <div className="text-[#c0a742] text-xl capitalize font-black flex flex-col">
            <div className="first-letter:text-4xl first-letter:text-black overflow-hidden">
              shirts arena
            </div>
            <i className="text-[8px] text-black">curate your wardrobe!</i>
          </div>
        </div>

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
              menu ? "w-[70%] bg-white h-full border slideout" : "hidden"
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
