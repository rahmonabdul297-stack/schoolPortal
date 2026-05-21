import {
  FaAngleRight,
  FaArrowRightLong,
  FaMinus,
  FaPlus,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../utils/helper";
import {
  PromoCardsArr,
  schoolQualifications,
} from "../components/Arrays/array";
import { IoMegaphoneOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { CartContext } from "../components/context/context";

const HomePage = () => {
  const { setChangebg } = useContext(CartContext);
  const [selected, setSelected] = useState(0);
  return (
    <div
      className="w-screen min-h-screen bg-white overflow-scroll "
      onScroll={() => setChangebg((prev) => !prev)}
    >
      <div className="mt-20 w-full h-screen hero-sec bg-cover bg-center bg-no-repeat">
        <div className="bg-black/60 h-full w-full py-10">
          <div className="container text-white/65 text-xl py-20 flex flex-col gap-4">
            <h4 className="text-[#c0a742] uppercase font-black font-[ubuntu-sans-mono-font] text-4xl overflow-hidden">
              {" "}
              Ayodele schools{" "}
            </h4>
            <p className="text-md lg:w-[50%] font-[ubuntu-sans-mono-font]">
              {" "}
              A place where learning meets excellence! We provide quality
              education in a safe, friendly, and inspiring environment. Our
              experienced teachers, modern facilities, and strong commitment to
              academic success help every student reach their full potential.
              Join us today and give your child the foundation for a brighter
              future. Admissions are now open!
            </p>

            <Link
              to="/about"
              className="bg-[#c0a742] text-white p-3 rounded-3xl lg:w-[20%] capitalize flex items-center gap-3 justify-center"
            >
              <div className="capitalize text-xl font-[ubuntu-sans-mono-font]">
                apply now
              </div>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>

      <section className=" flex gap-5 py-20">
        <div className="container">
          <h4 className="text-3xl font-[ubuntu-sans-mono-font] uppercase text-start py-10 text-[#c0a742]">
            summary about us
          </h4>
          <div>
            <div>
              <span className="font-black"> Ayodele Schools</span>, founded by
              the{" "}
              <span className="font-black">Late Mrs Ajike Olanike Omobo</span>,
              has been in existence for over three decades, first with her
              Primary School session and then the College which came into
              existence in the year 2006. Ayodele Schools take pride in being a
              place where every pupil/ student can find an avenue for success,
              and strive to find the best in all learners. We have a strong
              placement and scholarship programs that have benefited and will
              continue to benefit many studen...
            </div>
            <Link
              to="/about"
              className="text-[#c0a742] hover:text-black flex items-center justify-end"
            >
              read more <FaAngleRight />
            </Link>
          </div>
        </div>
      </section>

      <section className=" bg-[#c0a742]/20 py-20">
        <div className="container flex flex-col items-center justify-center">
          <h4 className="text-3xl font-[ubuntu-sans-mono-font] uppercase text-center pb-6">
            Why you should Choose Us
          </h4>
          <div className=" flex flex-col gap-2 ">
            {schoolQualifications.map((cont) => (
              <div
                key={cont.id}
                className="w-[85%] lg:w-[500px] bg-white/40 p-3 flex flex-col gap-3 shadow-2xs rounded-3xl hover:scale-95 duration-1000"
              >
                <div className="flex justify-between">
                  {" "}
                  <h2>{cont.qua}</h2>{" "}
                  <div onClick={() => setSelected(cont.id)}>
                    {selected === cont.id ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>
                <div className="text-black/35 text-sm font-[ubuntu-sans-mono-font ]">
                  {selected === cont.id ? cont.note : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
