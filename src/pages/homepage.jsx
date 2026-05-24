import {
  FaAngleRight,
  FaArrowRightLong,
  FaAward,
  FaBookOpen,
  FaChalkboardUser,
  FaGraduationCap,
  FaMinus,
  FaPlus,
  FaSchool,
  FaUsers,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/context/context";
import {
  EventsArr,
  homePrograms,
  homeStats,
  schoolQualifications,
} from "../components/Arrays/array";

const programIcons = {
  1: FaBookOpen,
  2: FaAward,
  3: FaGraduationCap,
  4: FaUsers,
};

const HomePage = () => {
  const { dark } = useContext(CartContext);
  const [selected, setSelected] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);

  const heroImages = [
    "/images/ayodelestud.webp",
    "/images/school frontage.webp",
    "/images/school img.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const panelClass = `${
    dark
      ? "bg-AppDarkElevated border border-AppYellow/20 text-AppCream"
      : "bg-AppWhite border border-AppYellow/25 text-AppBlack shadow-sm"
  } rounded-3xl contact-card-lift`;

  return (
    <div
      className={`w-full min-h-screen overflow-x-hidden transition-colors duration-300 ${
        dark ? "bg-AppDark text-AppCream" : "bg-AppWhite text-AppBlack"
      }`}
    >
      <Helmet>
        <title>Ayodele nursery & primary School | Home</title>
        <meta
          name="description"
          content="Ayodele nursery & primary School, Sagamu — quality primary and secondary education, scholarships, and academic excellence for over three decades."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative mt-20 min-h-[88vh] lg:min-h-screen overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              heroSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${img}')` }}
            aria-hidden={heroSlide !== index}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

        <div className="container relative z-10 flex flex-col justify-center min-h-[88vh] lg:min-h-screen py-16 lg:py-24">
          <h1 className="contact-hero-in contact-reveal-delay-1 text-AppWhite font-[ubuntu-sans-mono-font] text-4xl sm:text-5xl lg:text-7xl font-black uppercase leading-tight max-w-4xl">
            Where learning meets{" "}
            <span className="text-AppYellow welcomeAnim">excellence</span>
          </h1>

          <p className="contact-reveal contact-reveal-delay-2 text-AppWhite/80 font-[ubuntu-sans-mono-font] text-base sm:text-lg lg:text-xl max-w-2xl mt-6 leading-relaxed">
            Ayodele Schools provides quality education in a safe, inspiring
            environment — with experienced teachers, modern facilities, and a
            tradition of success spanning over three decades.
          </p>

          <div className="contact-reveal contact-reveal-delay-3 flex flex-wrap gap-4 mt-10">
            <Link
              to="/addmission"
              className="inline-flex items-center gap-3 rounded-full bg-AppYellow text-AppBlack px-8 py-3.5 font-[ubuntu-sans-mono-font] font-bold uppercase text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_28px_rgba(192,167,66,0.45)]"
            >
              Apply now <FaArrowRightLong />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 rounded-full border-2 border-AppYellow text-AppWhite px-8 py-3.5 font-[ubuntu-sans-mono-font] font-bold uppercase text-sm transition-all duration-300 hover:bg-AppYellow/15"
            >
              Our story <FaAngleRight />
            </Link>
          </div>

          <div className="flex gap-2 mt-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setHeroSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  heroSlide === index
                    ? "w-10 bg-AppYellow"
                    : "w-4 bg-AppWhite/40 hover:bg-AppWhite/70"
                }`}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-AppYellow/20 bg-black/50 backdrop-blur-md">
          <div className="container grid grid-cols-2 lg:grid-cols-4 gap-px py-0">
            {homeStats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-center py-5 px-2 text-center border-r border-AppYellow/10 last:border-r-0"
              >
                <span className="text-AppYellow font-[ubuntu-sans-mono-font] text-2xl sm:text-3xl font-black">
                  {stat.value}
                </span>
                <span className="text-AppWhite/70 font-[ubuntu-sans-mono-font] text-[10px] sm:text-xs uppercase tracking-wide mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About split */}
      <section
        className={`py-20 lg:py-28 ${dark ? "bg-AppDark" : "bg-AppWhite"}`}
      >
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="contact-reveal grid grid-cols-2 gap-3 sm:gap-4">
            <img
              src="/images/school frontage.webp"
              alt="Ayodele Schools campus"
              className="col-span-2 h-48 sm:h-56 w-full object-cover rounded-3xl border-2 border-AppYellow/30"
            />
            <img
              src="/images/culture day.webp"
              alt="Culture day at Ayodele Schools"
              className="h-36 sm:h-44 w-full object-cover rounded-2xl border-2 border-AppYellow/20"
            />
            <img
              src="/images/school team.webp"
              alt="School team"
              className="h-36 sm:h-44 w-full object-cover rounded-2xl border-2 border-AppYellow/20"
            />
          </div>

          <div className="contact-reveal contact-reveal-delay-1 flex flex-col gap-5">
            <p className="text-AppYellow uppercase font-[ubuntu-sans-mono-font] text-sm tracking-[0.2em]">
              Summary about us
            </p>
            <h2 className="font-[ubuntu-sans-mono-font] text-3xl sm:text-4xl font-black uppercase leading-snug">
              Building futures in <span className="text-AppYellow">Sagamu</span>{" "}
              since day one
            </h2>
            <p
              className={`font-[ubuntu-sans-mono-font] leading-relaxed ${
                dark ? "text-AppCream/85" : "text-AppBlack/80"
              }`}
            >
              <span className="font-bold">Ayodele Schools</span>, founded by the{" "}
              <span className="font-bold">Late Mrs Ajike Olanike Omobo</span>,
              has served learners for over three decades. Our Primary section
              laid the foundation; the College followed in 2006. Today we offer
              strong placement, scholarships, and programmes that help every
              pupil find their path to success.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/scholarship"
                className={`inline-flex items-center gap-2 rounded-full border-2 border-AppYellow px-5 py-2.5 font-[ubuntu-sans-mono-font] text-sm font-bold uppercase transition-all hover:bg-AppYellow hover:text-AppBlack ${
                  dark ? "text-AppCream" : "text-AppBlack"
                }`}
              >
                Scholarship <FaAngleRight />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-AppYellow font-[ubuntu-sans-mono-font] text-sm font-bold uppercase hover:gap-3 transition-all"
              >
                Read full story <FaAngleRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick programs */}
      <section
        className={`py-20 ${dark ? "bg-AppDarkMuted/50" : "bg-AppYellow/10"}`}
      >
        <div className="container">
          <div className="text-center mb-12 contact-reveal">
            <p className="text-AppYellow uppercase font-[ubuntu-sans-mono-font] text-sm tracking-widest mb-2">
              Explore
            </p>
            <h2
              className={`font-[ubuntu-sans-mono-font] text-3xl sm:text-4xl font-black uppercase ${
                dark ? "text-AppCream" : "text-AppBlack"
              }`}
            >
              What we offer
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homePrograms.map((program, index) => {
              const Icon = programIcons[program.id] || FaBookOpen;
              return (
                <Link
                  key={program.id}
                  to={program.url}
                  className={`contact-reveal group ${panelClass} p-6 flex flex-col gap-4`}
                  style={{ animationDelay: `${0.1 + index * 0.08}s` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-AppYellow/20 text-AppYellow text-xl transition-transform duration-300 group-hover:scale-110">
                    <Icon aria-hidden />
                  </div>
                  <h3 className="font-[ubuntu-sans-mono-font] font-bold text-lg capitalize">
                    {program.title}
                  </h3>
                  <p
                    className={`font-[ubuntu-sans-mono-font] text-sm leading-relaxed flex-1 ${
                      dark ? "text-AppMuted" : "text-AppBlack/70"
                    }`}
                  >
                    {program.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-AppYellow font-[ubuntu-sans-mono-font] text-xs font-bold uppercase group-hover:gap-3 transition-all">
                    {program.cta} <FaArrowRightLong />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campus life / events */}
      <section className={`py-20 ${dark ? "bg-AppDark" : "bg-AppWhite"}`}>
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 contact-reveal">
            <div>
              <p className="text-AppYellow uppercase font-[ubuntu-sans-mono-font] text-sm tracking-widest mb-2">
                Campus life
              </p>
              <h2
                className={`font-[ubuntu-sans-mono-font] text-3xl sm:text-4xl font-black uppercase ${
                  dark ? "text-AppCream" : "text-AppBlack"
                }`}
              >
                School events
              </h2>
            </div>
            <Link
              to="/about"
              className="text-AppYellow font-[ubuntu-sans-mono-font] text-sm font-bold uppercase inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              See more <FaAngleRight />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EventsArr.slice(0, 3).map((event, index) => (
              <article
                key={event.id}
                className={`contact-reveal group overflow-hidden rounded-3xl border-2 border-AppYellow/25 ${
                  dark ? "bg-AppDarkElevated" : "bg-AppWhite"
                }`}
                style={{ animationDelay: `${0.12 + index * 0.1}s` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={event.EventsImg}
                    alt={event.Events}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 font-[ubuntu-sans-mono-font] font-bold text-AppWhite uppercase text-lg">
                    {event.Events}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section
        className={`py-20 lg:py-28 ${dark ? "bg-AppDarkMuted" : "bg-AppYellow/15"}`}
      >
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="contact-reveal lg:sticky lg:top-28">
            <p className="text-AppYellow uppercase font-[ubuntu-sans-mono-font] text-sm tracking-widest mb-2">
              Our strengths
            </p>
            <h2
              className={`font-[ubuntu-sans-mono-font] text-3xl sm:text-4xl font-black uppercase mb-4 ${
                dark ? "text-AppCream" : "text-AppBlack"
              }`}
            >
              Why choose Ayodele nursery & primary School?
            </h2>
            <p
              className={`font-[ubuntu-sans-mono-font] mb-6 ${
                dark ? "text-AppMuted" : "text-AppBlack/70"
              }`}
            >
              Tap each card to read more about what sets our learning community
              apart.
            </p>
            <div className={`${panelClass} p-6 hidden lg:block`}>
              <FaChalkboardUser className="text-AppYellow text-4xl mb-4" />
              <p className="font-[ubuntu-sans-mono-font] text-sm leading-relaxed">
                From qualified teachers to modern labs and a culture of
                excellence — we partner with parents to nurture the whole child.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 contact-reveal contact-reveal-delay-1">
            {schoolQualifications.map((cont) => (
              <div
                key={cont.id}
                className={`${panelClass} p-4 sm:p-5 flex flex-col gap-3 cursor-pointer transition-all duration-300 ${
                  selected === cont.id ? "ring-2 ring-AppYellow/50" : ""
                }`}
                onClick={() => setSelected(selected === cont.id ? 0 : cont.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelected(selected === cont.id ? 0 : cont.id);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className="w-full flex justify-between items-center gap-4">
                  <h3 className="font-[ubuntu-sans-mono-font] font-bold capitalize">
                    {cont.qua}
                  </h3>
                  <span className="text-AppYellow shrink-0">
                    {selected === cont.id ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <div
                  className={`text-sm font-[ubuntu-sans-mono-font] overflow-hidden transition-all duration-500 ${
                    selected === cont.id
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  } ${dark ? "text-AppMuted" : "text-AppBlack/60"}`}
                >
                  {cont.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <div
            className={`contact-reveal relative overflow-hidden rounded-3xl border-2 border-AppYellow p-10 sm:p-14 text-center ${
              dark
                ? "bg-gradient-to-br from-AppDarkElevated via-AppDarkMuted to-AppDark"
                : "bg-gradient-to-br from-AppYellow/30 via-AppWhite to-AppYellow/10"
            }`}
          >
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-AppYellow/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-AppYellow/15 blur-3xl" />

            <h2
              className={`relative font-[ubuntu-sans-mono-font] text-2xl sm:text-4xl font-black uppercase mb-4 ${
                dark ? "text-AppCream" : "text-AppBlack"
              }`}
            >
              Ready to join Ayodele nursery & primary School?
            </h2>
            <p
              className={`relative font-[ubuntu-sans-mono-font] max-w-xl mx-auto mb-8 ${
                dark ? "text-AppMuted" : "text-AppBlack/75"
              }`}
            >
              Give your child a strong foundation. Explore admission
              requirements, scholarships, or speak with our team today.
            </p>
            <div className="relative flex flex-wrap justify-center gap-4">
              <Link
                to="/addmission"
                className="inline-flex items-center gap-2 rounded-full bg-AppYellow text-AppBlack px-8 py-3.5 font-[ubuntu-sans-mono-font] font-bold uppercase text-sm hover:scale-[1.02] transition-transform"
              >
                Start admission <FaArrowRightLong />
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 rounded-full border-2 border-AppYellow px-8 py-3.5 font-[ubuntu-sans-mono-font] font-bold uppercase text-sm hover:bg-AppYellow/10 transition-colors ${
                  dark ? "text-AppCream" : "text-AppBlack"
                }`}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
