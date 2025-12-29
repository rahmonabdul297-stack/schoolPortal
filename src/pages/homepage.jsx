import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../utils/helper";
import { PromoCardsArr } from "../components/Arrays/array";
import { IoMegaphoneOutline } from "react-icons/io5";

const HomePage = () => {
  return (
    <div className="w-screen min-h-screen bg-white overflow-scroll">
      <div className="bg-[url('/images/Gemini_Generated_Image_vwis6ovwis6ovwis.png')]  bg-cover bg-no-repeat h-screen py-10 flex flex-col">
        <i className="bg-[#c0a742] text-white text-center text-2xl lg:text-4xl font-black lg:w-[30%] overflow-hidden m-auto uppercase p-5 rounded-lg welcomeAnim">
          welcome !
        </i>

        <div className="bg-gray-100 flex justify-between items-center gap-4 w-[90%] lg:w-[800px] m-auto   text-[#c0a742] border rounded-lg">
          <input
            type="text"
            placeholder="search products"
            className="outline-[#c0a742] w-full  px-4 py-2 rounded-lg"
          />
          <Link to="/product" className="bg-[#c0a742] text-white lg:w-[20%] px-4 py-2 text-center uppercase">
            search
          </Link>
        </div>

        <div className="text-white text-center text-3xl lg:text-4xl font-black w-[60%] lg:w-[30%] overflow-hidden m-auto uppercase">
          curate your wardrope
        </div>
      </div>

      <section className="container flex gap-5 py-20">
        <div>
          <h4 className="text-3xl uppercase">summary about us</h4>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae fuga nulla animi facere, ipsum nihil eum atque quae
              ipsam quasi, consectetur soluta. Necessitatibus tempore,
              architecto pariatur officia aliquam inventore asperiores
            </p>

            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              atque necessitatibus nesciunt reiciendis nihil facilis voluptatum
              doloremque esse impedit facere. Quis architecto vel eum id esse
              odit officia perspiciatis atque assumenda consequuntur. Eum
              laudantium, explicabo eius voluptas mollitia totam facilis minus,
              accusantium dolore vel placeat autem. Quo rerum dicta repellat.
            </p>
            <Link
              to="/about"
              className="text-[#c0a742] hover:text-black flex items-center justify-end"
            >
              read more <FaAngleRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="container flex flex-col lg:flex-row justify-between gap-5 py-10">
        <div className="lg:w-[20%]">
          <h4 className="text-3xl uppercase">promo's here</h4>
          <div className="text-xs text-[#999]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            aperiam eos labore nostrum rerum! Dicta quos nam excepturi commodi
            enim, sunt harum quam id inventore?
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6">
          {PromoCardsArr.slice(0,3).map((items,id) => (
            <div className="bg-[#c0a742] w-[200px]  rounded-lg flex flex-col drop-shadow-2xl" key={id}>
              <div className="flex justify-between gap-4">
                <img
                  src={items.productImg}
                  alt=""
                  className="h-[100px] shadow-xl shadow-black"
                />
                <div>
                  <div className="bg-red-500 text-white w-max p-2 h-10 text-[10px] flex items-center line-through">
                    {currencyFormatter(items.oldPrice)}
                  </div>
                  <div className="bg-green-700 text-white w-max p-2 h-10 text-[10px] flex items-center rounded-b">
                    {currencyFormatter(items.newPrice)}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 px-4">
                {" "}
                <div className="mt-3 text-xs text-[#dadada]  capitalize font-bold">
                  <div>{items.shirtName}</div>
                </div>
                <img
                  src="/public/images/1766574524942-removebg-preview.png"
                  alt=""
                  className="h-20 w-[50%]"
                />
              </div>

              <Link to="/product"  className="bg-black text-white w-[50%] m-auto p-2 mb-2 text-center uppercase text-[10px] hover:scale-105 flex items-center gap-3">
              <IoMegaphoneOutline />
                get now!
              </Link>
            </div>
          ))}
          <Link to="/product" className="w-[100px] bg-[#c0a742] hover:bg-black duration-1000 ease-in-out text-center text-white capitalize py-1 rounded">see all</Link>
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;
