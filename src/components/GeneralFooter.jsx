import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebook,
  FaSquareInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const GeneralFooter = () => {
  return (
    <div className="bg-black py-10">
      <div className="container flex flex-col text-white">
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className="flex flex-col capitalize">
            <div className="font-bold uppercase">menu</div>
            <Link to="/homepage" className="text-[#c0a742] hover:text-white">
              home
            </Link>
            <Link to="/about" className="text-[#c0a742] hover:text-white">
              about us
            </Link>
            <Link className="text-[#c0a742] hover:text-white">contact</Link>
            <Link className="text-[#c0a742] hover:text-white">products</Link>
          </div>

          <div className="flex flex-col capitalize">
            <div className="font-bold uppercase">legals</div>
            <Link className="text-[#c0a742] hover:text-white">privacy</Link>
            <Link className="text-[#c0a742] hover:text-white">services</Link>
            <Link className="text-[#c0a742] hover:text-white">FAQs</Link>
          </div>
          <div className="flex flex-col capitalize">
            <div className="font-bold uppercase">your items</div>
            <Link className="text-[#c0a742] hover:text-white">category</Link>
            <Link className="text-[#c0a742] hover:text-white">cart</Link>
          </div>
          <div className="flex flex-col">
            <div className="font-bold uppercase">follow us</div>
            <Link className="flex items-center gap-3 text-[#c0a742] hover:text-white capitalize ">
              {" "}
              <FaFacebook />
              <div className="">
                facebook
              </div>
            </Link>

            <Link className="flex items-center gap-3 text-[#c0a742] hover:text-white capitalize ">
              {" "}
             <FaXTwitter />
              <div className="">
                twitter
              </div>
            </Link>
           
             <Link className="flex items-center gap-3 text-[#c0a742] hover:text-white capitalize ">
              {" "}
              <FaYoutube />
              <div className="">
                youtube
              </div>
            </Link>

              <Link className="flex items-center gap-3 text-[#c0a742] hover:text-white capitalize ">
              {" "}
               <FaSquareInstagram />
              <div className="">
                Instagram
              </div>
            </Link>

              <Link className="flex items-center gap-3 text-[#c0a742] hover:text-white capitalize ">
              {" "}
                <AiFillTikTok />
              <div className="">
                tiktok
              </div>
            </Link>
           
          
          
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-bold uppercase">join our community</div>
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-sm p-2"
            />
            <div className="text-white text-[8px]">
              join our community for special access
            </div>
            <div className="bg-[#c0a742] hover:bg-black hover:border text-center p-2 rounded ">
              subscribe
            </div>
          </div>
        </div>
        {/* logo */}
        <div className="flex flex-col  items-center py-5">
          <img
            src="/public/images/Gemini_Generated_Image_ngyqpzngyqpzngyq-removebg-preview.png"
            alt=""
            className="h-20 w-20 "
          />
          <div className="text-[#c0a742] text-xl capitalize font-black flex flex-col items-center">
            <div className="first-letter:text-4xl first-letter:text-white overflow-hidden">
              shirts arena
            </div>
            <i className="text-[8px] text-white">curate your wardrope!</i>
          </div>
        </div>
        <div className="text-center text-sm border-t py-2">
          Copyright 2025. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default GeneralFooter;
