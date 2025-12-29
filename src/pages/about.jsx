import { BiSolidMedal } from "react-icons/bi";
import { TeamsArr } from "../components/Arrays/array";

const AboutPage = () => {
  return (
    <div className="py-20">
      <section className="container py-10">
        <div>
          <h4 className="text-center text-4xl font-bold capitalize">
            About us
          </h4>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-4">
              <div>
                <img
                  src="/public/images/ShirtArena-CEO-Saad-Jijji-Pix-1-598x598.jpg"
                  alt=""
                />
                <div className="capitalize font-bold">Mr. dan jiji</div>
                <div className="text-xs">cheif executive officer (CEO)</div>
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              aperiam accusamus iste facere nihil quos quisquam, eveniet vitae,
              doloribus, ad quibusdam asperiores a eaque repellat illum amet
              quam. Eveniet, cum incidunt sit accusamus obcaecati deserunt
              mollitia laboriosam alias quasi minus aperiam deleniti officia,
              laborum dignissimos exercitationem fugiat possimus vero sunt? Quo
              voluptatem nemo eligendi quis culpa aliquid dolorum. Aut,
              reiciendis beatae doloremque omnis tempore dolore voluptatum animi
              asperiores nam maxime nemo debitis labore quo veniam quam dolorum
              quas nisi pariatur in vitae deserunt. Voluptatum rerum, molestiae
              esse optio in similique sed, ducimus culpa, sint
            </div>{" "}
            <p>
              necessitatibus dicta voluptas cum minima labore eum! Repellendus
              amet quia esse ipsum dolorum ipsa cupiditate eligendi, doloremque
              minus qui recusandae, dolor magnam exercitationem laudantium
              veniam odio obcaecati culpa atque eius placeat blanditiis
              voluptatibus? Quasi cum provident laudantium ut beatae laboriosam
              quam voluptates esse error voluptatum qui facilis aut saepe
              blanditiis modi excepturi perspiciatis quibusdam impedit laborum
              quae vel nesciunt dignissimos, quis nemo! Tenetur ducimus iste
              perspiciatis amet sapiente reiciendis quaerat explicabo quos
              dolorum, iusto repellendus quis
            </p>
            <p>
              laborum rem molestiae error quia illo esse. Aspernatur voluptate,
              voluptatum itaque, error, omnis iusto nostrum doloribus fugiat
              laborum aperiam praesentium temporibus id consequuntur nulla totam
              maxime. Labore ad doloribus quis, cupiditate odio corrupti,
              pariatur consequatur quo inventore sit possimus, at assumenda
              tenetur atque! Natus sunt ut adipisci ipsam. At, hic eius ut
              magnam quos doloribus nulla non a reiciendis veritatis error
              quisquam alias temporibus voluptas excepturi beatae aliquid quae,
              impedit repudiandae explicabo perspiciatis sed sapiente ipsum
              facilis. Voluptatem quod tempore quisquam fuga obcaecati
              aspernatur quo reprehenderit expedita necessitatibus praesentium
              eveniet neque maiores eos, rem earum corporis hic, veritatis vitae
              odio animi beatae voluptate. Quae maiores, ut ab debitis atque
              ratione provident ea nam assumenda tenetur dolorem unde corporis
              aperiam magnam, laudantium placeat ducimus, quasi alias nihil
              voluptatem! Recusandae, laboriosam exercitationem.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <h4 className="text-center text-4xl font-bold capitalize">our team</h4>
        <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-4 py-10">
         {TeamsArr.map((items,id)=>(
 <div className="bg-[#c0a742] text-white pb-10 h-[400px] w-[90%] lg:w-[250px] rounded-lg flex flex-col items-center gap-2" key={id}>
            <img src={items.img} alt="" className="h-[70%] w-full rounded-t-[500px]" />

            <div className="font-black capitalize flex items-center">
              <BiSolidMedal color="#000" />
            <div>{items.name}</div>
              <BiSolidMedal color="#000" />
              
            </div>
            <div className="text-black capitalize">{items.post}</div>
          </div>
          ))}
        
        </div>
      </section>
    </div>
  );
};
export default AboutPage;
