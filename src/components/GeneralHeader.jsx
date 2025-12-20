import { Link } from "react-router-dom";
import { LuBaggageClaim } from "react-icons/lu";
import { useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

const GeneralHeader = () => {
  const [fixed, setFixed] = useState(false);
  const [menu, setmenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlemenu=()=>{
    setmenu((prev)=> !prev)
  }

  return (
    <div className="w-full bg-[#F9F8FB] shadow-2xl">
      {/* desktop header */}
      <div
        className={
          fixed
            ? "container hidden lg:flex justify-between items-center fixed "
            : "container hidden lg:flex justify-between items-center"
        }
      >
        {/* logo */}
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
            <i className="text-[8px] text-black">curate your wardrope!</i>
          </div>
        </div>
        {/* Desktop navbar */}
        <div
          className={
            fixed
              ? "flex justify-between items-center gap-4 capitalize font-bold text-black "
              : "flex justify-between items-center gap-4 capitalize font-bold text-[#c0a742] "
          }
        >
          <Link to="/homepage">home</Link>
          <Link to="/about">about us</Link>
          <Link>contact</Link>
          <Link>products</Link>
        </div>

        <div className="text-black flex items-center gap-2">
          <LuBaggageClaim size={30} /> cart
        </div>
      </div>
      {/* mobile header */}
      <div className={fixed?"lg:hidden container flex justify-between items-center fixed":"lg:hidden container flex justify-between items-center "}>
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
            <i className="text-[8px] text-black">curate your wardrope!</i>
          </div>
        </div>

        <div className="border p-2 rounded-lg" onClick={handlemenu}>
          {menu?<IoMdClose />:<TfiMenu />}
        </div>
        <div className={menu?"bg-white/55 h-screen w-[100%] mx-auto fixed top-20 left-0 flex justify-end":"hidden"}>
          <div className={menu?"w-[70%] bg-white h-full border slideout":"hidden"}>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralHeader;
