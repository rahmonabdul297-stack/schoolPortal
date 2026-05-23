import { BiSolidMedal } from "react-icons/bi";
import { EventsArr, schoolQualifications } from "../components/Arrays/array";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/context/context";

const AboutPage = () => {
  const { dark } = useContext(CartContext);
  const [Food, setFood] = useState(0);
  const [eventIndex, setEventIndex] = useState(0);
  const foodArr = [
    "/images/school frontage.webp",
    "/images/school img.webp",
    "/images/school img 3.webp",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setFood((prevIndex) =>
        prevIndex === foodArr.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [foodArr.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEventIndex((prevIndex) =>
        prevIndex === EventsArr.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="pt-20">
      <Helmet>
        <title>About Us | Ayodele schools</title>
        <meta
          name="description"
          content="Learn more about Ayodele schools and our quality education."
        />
      </Helmet>
      <section className="flex flex-col lg:flex-row">
        <div
          className={`px-10 lg:w-[50%] ${dark ? "bg-AppDarkElevated text-AppCream" : "bg-AppWhite text-AppBlack"} border-r-20`}
        >
          <div className=" text-xl py-20 flex flex-col gap-4 ">
            <i className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-4xl overflow-hidden">
              {" "}
              Our Story{" "}
            </i>
            <div className="text-[16px] font-[ubuntu-sans-mono-font] flex flex-col gap-3">
              {" "}
              <div>
                <span className="font-bold">
                  {" "}
                  <span>Ayodele Schools</span>
                </span>
                , founded by the{" "}
                <span className="font-bold">Late Mrs Ajike Olanike Omobo</span>,
                has been in existence for over three decades, first with her
                Primary School session and then the College which came into
                existence in the year 2006.{" "}
                <span className="font-bold">Ayodele Schools</span> take pride in
                being a place where every pupil/ student can find an avenue for
                success, and strive to find the best in all learners. We have a
                strong placement and scholarship programs that have benefited
                and will continue to benefit many students.
              </div>
              <div>
                The school has very strong academic intervention programs to
                ensure that all our learners can reach their set goals. We offer
                academic opportunities, vocational, athletic; as well as
                performing arts programs, with a tradition of excellence. Our
                teaching and learning activities are carried out in conducive
                environments with the best teaching and learning facilities that
                are up-to-date.
              </div>
              <div>
                With our qualitative teaching staff and exceptionally
                professional support staff,{" "}
                <span className="font-bold">Ayodele Schools</span> is the best
                place for every child to get their right footing in education;
                and with our culture of excellence the school has built over the
                years, <span className="font-bold">Ayodele Schools</span> remain
                the topmost household name in Sagamu and her environs. In fact,
                there are only two schools in the whole of Sagamu:{" "}
                <span className="font-bold">Ayodele Schools</span> and others.
              </div>
            </div>
          </div>
        </div>
        <img src="/images/school img.webp" alt="" className="lg:w-[50%]" />
      </section>

      <h4
            className={`${dark ? "text-AppCream" : "text-AppBlack"} text-center py-10 font-[ubuntu-sans-mono-font] text-6xl`}
          >
            Our principles
          </h4>
      <section className=" container flex flex-col lg:grid grid-cols-4 py-10 gap-4">
        <div className={dark ? "aboutCard2" : "aboutCard"}>
          <h4 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-xl overflow-hidden">
            mission
          </h4>
          To partner with our parents, to provide innovative and sustainable
          education solutions with focus on the whole child development
        </div>

        <div className={dark ? "aboutCard2" : "aboutCard"}>
          <h4 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-xl overflow-hidden">
            vision
          </h4>
          Ayodele Schools strive to be the most successful and respected school
          in the education industry. Building a nation of healthy and wealthy
          professionals with affinity for Excellence in service and delivery.
        </div>

        <div className={dark ? "aboutCard2 " : "aboutCard "}>
          <h4 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-xl overflow-hidden">
            value
          </h4>
          {schoolQualifications.map((n) => (
            <ul key={n.id}>
              <li>{n.qua}</li>
            </ul>
          ))}
        </div>
      </section>

      <section className={`${dark ? "bg-AppDarkMuted" : ""} py-10 `}>
        <section className="container flex lg:grid flex-col items-center gap-5">
          <h4
            className={`${dark ? "text-AppCream" : "text-AppBlack"} text-center py-10 font-[ubuntu-sans-mono-font] text-6xl`}
          >
            Our schools
          </h4>

          <div className="flex flex-col items-center justify-center  lg:grid grid-cols-3 gap-6">
            <img
              src={foodArr[Food]}
              className="col-span-2 border-2 rounded-3xl h-[400px] w-[600px]"
            />
            <div className="col-span-1 flex flex-col gap-3">
              <div>
                <h4 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-xl overflow-hidden"> Primary Section </h4>
               <div className={`${dark ? "text-AppCream" : "text-AppBlack"} font-[ubuntu-sans-mono-font] text-xl`}>
                 This is the foundation of formal education, typically
                encompassing kindergarten/reception through to the end of
                elementary school (usually ages 5 to 11). The focus here is on
                fundamental literacy, numeracy, social skills, and introducing
                basic concepts in science and humanities.
               </div>
              </div>

              <div>
                <h4 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-xl overflow-hidden">Secondary Section</h4>
               <div className={`${dark ? "text-AppCream" : "text-AppBlack"} font-[ubuntu-sans-mono-font] text-xl`}>
                 This represents the next level of schooling, often divided into
                middle school and high school (usually ages 11 to 18). Here, the
                curriculum becomes much more specialized, preparing students for
                higher education, vocational training, or entering the
                workforce.
               </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className={`${dark ? "bg-AppDark" : "bg-AppYellow/20"} py-10`}>
        <div className="container">
          <h4
            className={`${dark ? "text-AppCream" : "text-AppBlack"} text-center py-10 font-[ubuntu-sans-mono-font] text-6xl`}
          >
            School Events
          </h4>

          <div className="flex flex-col items-center gap-6">
            <div className="relative w-full max-w-4xl">
              <img
                src={EventsArr[eventIndex].EventsImg}
                alt={EventsArr[eventIndex].Events}
                className="w-full h-[320px] lg:h-[450px] object-cover border-2 rounded-3xl"
              />
              <h5
                className={`${dark ? "text-AppCream" : "text-AppBlack"} text-center mt-4 font-[ubuntu-sans-mono-font] text-2xl uppercase font-black`}
              >
                {EventsArr[eventIndex].Events}
              </h5>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {EventsArr.map((event, index) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setEventIndex(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    eventIndex === index
                      ? "bg-AppYellow"
                      : dark
                        ? "bg-AppMuted/50"
                        : "bg-AppBlack/30"
                  }`}
                  aria-label={`Show ${event.Events}`}
                />
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {EventsArr.map((event, index) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setEventIndex(index)}
                  className={`overflow-hidden rounded-xl border-2 transition-opacity ${
                    eventIndex === index
                      ? "border-AppYellow opacity-100"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={event.EventsImg}
                    alt={event.Events}
                    className="h-16 w-24 object-cover lg:h-20 lg:w-32"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutPage;
