import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebook,
  FaSquareInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import Logo from "./logo/logo";
import { Link } from "react-router-dom";
import { navbar } from "./Arrays/array";

const GeneralFooter = () => {
  return (
    <div className="bg-AppDark border-t border-AppYellow/20 py-10">
      <div className="container lg:px-20 flex flex-col text-white">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="flex flex-col capitalize">
            <div className="font-bold uppercase">quick links</div>
            {navbar.slice(0,5).map((itm) => (
              <Link
                to={itm.url}
                key={itm.id}
                className=" text-AppYellow hover:text-white flex items-center gap-2"
              >
                {itm.nav}
              </Link>
            ))}
          </div>

          <div className="flex flex-col capitalize">
            <div className="font-bold uppercase">legals</div>
            <Link
              to="/scholarship"
              className="text-AppYellow hover:text-white"
            >
              scholarship scheme
            </Link>
             {navbar.slice(6, 7).map((itm) => (
              <Link
                to={itm.url}
                key={itm.id}
                className=" text-AppYellow hover:text-white flex items-center gap-2"
              >
                {itm.nav}
              </Link>
            ))}
          </div>

          <div className="flex flex-col">
            <div className="font-bold uppercase">follow us</div>
            <HashLink className="flex items-center gap-3 text-AppYellow hover:text-white capitalize ">
              {" "}
              <FaFacebook />
              <div className="">facebook</div>
            </HashLink>

            <HashLink className="flex items-center gap-3 text-AppYellow hover:text-white capitalize ">
              {" "}
              <FaXTwitter />
              <div className="">twitter</div>
            </HashLink>

            <HashLink className="flex items-center gap-3 text-AppYellow hover:text-white capitalize ">
              {" "}
              <FaYoutube />
              <div className="">youtube</div>
            </HashLink>

            <HashLink className="flex items-center gap-3 text-AppYellow hover:text-white capitalize ">
              {" "}
              <FaSquareInstagram />
              <div className="">Instagram</div>
            </HashLink>

            <HashLink className="flex items-center gap-3 text-AppYellow hover:text-white capitalize ">
              {" "}
              <AiFillTikTok />
              <div className="">tiktok</div>
            </HashLink>
          </div>
        </div>
        {/* logo */}
        <div className="flex items-center justify-center py-7">
          <Logo />
        </div>
        <div className="text-center text-sm border-t py-2">
          Copyright 2026. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default GeneralFooter;
