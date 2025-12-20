import { FaAngleRight } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="w-screen min-h-screen bg-white overflow-scroll">
      <div className="bg-[url('/images/Gemini_Generated_Image_vwis6ovwis6ovwis.png')]  bg-cover bg-no-repeat h-screen py-10 flex flex-col">
        <i className="bg-[#c0a742] text-white text-center text-2xl lg:text-4xl font-black lg:w-[30%] overflow-hidden m-auto uppercase p-5 rounded-lg">
          welcome !
        </i>

        <div className="bg-gray-100 flex justify-between items-center gap-4 w-[90%] lg:w-[800px] m-auto   text-[#c0a742] border rounded-lg">
          <input
            type="text"
            placeholder="search products"
            className="outline-[#c0a742] w-full  px-4 py-2 rounded-lg"
          />
          <div className="bg-[#c0a742] text-white w-[20%] px-4 py-2 text-center uppercase ">
            search
          </div>
        </div>

        <div className="text-white text-center text-3xl lg:text-4xl font-black w-[60%] lg:w-[30%] overflow-hidden m-auto uppercase">
          curate your wardrope
        </div>
      </div>

      <section className="container flex gap-5 py-20">
        <div className="bg-[#c0a742] py-20 w-[30%] rounded">

        </div>
        <div className="w-[60%]">
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
            <div className="text-[#c0a742] flex items-center justify-end">read more <FaAngleRight/></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
