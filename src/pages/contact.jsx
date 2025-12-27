import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebook,
  FaSquareInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className=" py-24">
      <section className="container rounded-3xl lg:h-[500px] border flex flex-col lg:flex-row">
        <div className="bg-[#c0a742] text-black lg:w-[50%] h-full flex flex-col items-center justify-center p-10">
          <div className="font-black text-3xl lg:text-6xl overflow-hidden">
            welcome!
          </div>
          <i className="text-xs capitalize">thanks for reaching out to us</i>
          <div className="flex flex-col justify-between gap-2 ">
            <div className="font-bold uppercase">follow us :</div>
            <div className="flex justify-between gap-2 ">
              <Link className="flex items-center gap-1 text-[#000]  capitalize ">
                {" "}
                <FaFacebook />
                <div className="">facebook</div>
              </Link>

              <Link className="flex items-center gap-1 text-[#000]  capitalize ">
                {" "}
                <FaXTwitter />
                <div className="">twitter</div>
              </Link>

              <Link className="flex items-center gap-1 text-[#000]  capitalize ">
                {" "}
                <FaYoutube />
                <div className="">youtube</div>
              </Link>

              <Link className="flex items-center gap-1 text-[#000]  capitalize ">
                {" "}
                <FaSquareInstagram />
                <div className="">Instagram</div>
              </Link>

              <Link className="flex items-center gap-1 text-[#000]  capitalize ">
                {" "}
                <AiFillTikTok />
                <div className="">tiktok</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#000] text-[#c0a742] lg:w-[50%] h-full flex flex-col justify-center p-10">
            {/* logo */}
             <div className="flex flex-col  items-center ">
          <img
            src="/public/images/Gemini_Generated_Image_ngyqpzngyqpzngyq-removebg-preview.png"
            alt=""
            className="h-20 w-20 "
          />
         
        </div>
            <div className="font-black text-xl lg:text-6xl overflow-hidden capitalize text-center">contact us</div>
            <div className="flex flex-col gap-4">
             <div>
                   <label>username or email address</label>
            <input type="email" placeholder="" className="outline-0 w-full p-2 rounded-lg border"/>
             </div>
          <div>
              <label>message</label>
            <textarea placeholder="write..." className="outline-0 w-full  p-2 rounded-lg  border" rows={4}/>
          </div>
            </div>

            <div className="w-full bg-[#c0a742] text-black p-2 text-center  rounded-lg capitalize">submit</div>
        </div>
      </section>
    </div>
  );
};
export default ContactPage;
