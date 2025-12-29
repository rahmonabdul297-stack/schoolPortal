import { FaMinus, FaPlus } from "react-icons/fa6";
import { PromoCardsArr } from "../components/Arrays/array";
import { currencyFormatter } from "../utils/helper";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [Selected, setSelected] = useState();
  const [Quantity, setQuantity] = useState(0);

  const QuantityIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const navigate = useNavigate();
  const handleCartDetails = (item) => {
    navigate("/cart", { state: item });
  };

  return (
    <div className="py-24 ">
      <section className="container flex flex-col lg:grid grid-cols-4 gap-1">
        <div className="col-span-1 bg-[#c0a742] h-[50vh] overflow-y-auto p-4 rounded-2xl  capitalize">
          <div className="capitalize font-bold">type of shirts available</div>
          {PromoCardsArr.map((item, id) => (
            <div key={id} className="flex items-center gap-2">
              <div className="text-red-500">{item.id}.</div>
              <div className="text-sm">{item.shirtName}</div>
            </div>
          ))}
        </div>
        <div className="col-span-2   overflow-y-auto ">
          <div className="h-[50vh] w-full bg-black rounded-2xl p-3">
            <div className="bg-[#333] rounded-2xl border-2 border-white h-full w-full">
              <video autoPlay controls className="w-full h-full relative">
                <source src="/public/videos/istockphoto-1503900345-640_adpp_is.mp4" />
              </video>
              {/* logo */}
              <Link
                to="/"
                className="flex items-center absolute  left-[30%] lg:left-[500px] bottom-[5%] lg:bottom-[300px]"
              >
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
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-[#c0a742] flex flex-col items-center py-5 rounded-2xl h-[50vh]">
          <img src="/public/images/1766574524942-removebg-preview.png" />
          <div className="text-red-500 font-bold text-4xl uppercase py-2 overflow-y-hidden">
            shop now!!!
          </div>
        </div>

        <div className="col-span-4  bg-[#c0a742] rounded-t-lg h-max pb-10 mt-10">
          <div className="bg-green-800 w-full p-3 text-white uppercase text-xl">
            top products
          </div>
          <div className="flex  flex-wrap  justify-between px-2 gap-4">
            {PromoCardsArr.map((item, id) => (
              <div
                key={id}
                className="w-[180px] lg:w-[220px] bg-white p-5 flex flex-col items-center gap-3 product-car"
              >
                <img src={item.productImg} alt="" className="h-[200px]" />
                <div className="text-sm font-bold capitalize hover:text-[#c0a742] text-center">
                  {item.shirtName}
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs lg:text-sm">
                    {currencyFormatter(item.newPrice)}
                  </div>

                  <div
                    className="bg-[#c0a742] text-white capitalize px-2 text-xs  lg:text-sm"
                    onClick={() => handleCartDetails(item)}
                  >
                    Add to cart
                  </div>
                </div>
                <div className="w-full flex items-center justify-between">
                  <div>Quantity:</div>
                  <div className="flex justify-between items-center gap-2">
                    <div
                      className="bg-[#c0a742]  p-1 rounded-md flex  justify-center"
                      onClick={
                        Quantity === 0
                          ? null
                          : () => setQuantity((prev) => prev - 1)
                      }
                    >
                      <FaMinus />
                    </div>
                    <div>{Selected === item.id ? Quantity : 0}</div>
                    <div
                      className="bg-[#c0a742] p-1 rounded-md flex  justify-center"
                      onClick={() => (setSelected(item.id), QuantityIncrease(item.id))}
                    >
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductPage;
