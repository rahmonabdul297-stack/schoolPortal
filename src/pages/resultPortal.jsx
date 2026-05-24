import {
  FaArrowRightLong,
  FaChalkboardUser,
  FaGraduationCap,
  FaShieldHalved,
} from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { CartContext } from "../components/context/context";
import { RESULT_PORTAL_CHECK_URL, RESULT_PORTAL_URL } from "../components/Arrays/array";

const portalCards = [
  {
    id: "staff",
    title: "Staff portal",
    subtitle: "Teachers & administrators",
    description:
      "Sign in with your Staff ID and password to upload results, manage classes, and access admin tools.",
    icon: FaChalkboardUser,
    url: RESULT_PORTAL_URL,
    cta: "Staff sign in",
  },
  {
    id: "student",
    title: "Student portal",
    subtitle: "Pupils & parents",
    description:
      "Check term results, grades, and academic reports using the login details provided by the school.",
    icon: FaGraduationCap,
    url: RESULT_PORTAL_CHECK_URL,
    cta: "Check my result",
  },
];

const ResultPortal = () => {
  const { dark } = useContext(CartContext);

  return (
    <div className="pt-20 min-h-screen">
      <Helmet>
        <title>Result Portal | Ayodele nursery & primary School</title>
        <meta
          name="description"
          content="Access Ayodele nursery & primary School result portal — staff and student login."
        />
      </Helmet>

      <section
        className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat contact-hero-in"
        style={{ backgroundImage: "url('/images/ayodelestud.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />

        <div className="container relative z-10 py-16 sm:py-24">
          <div className="text-center mb-12 sm:mb-16 contact-reveal">
            <p className="text-AppYellow uppercase font-[ubuntu-sans-mono-font] text-sm tracking-[0.25em] mb-4">
              Ayodele Schools
            </p>
            <h1 className="text-AppWhite font-[ubuntu-sans-mono-font] text-3xl sm:text-5xl lg:text-6xl font-black uppercase">
              Result Portal
            </h1>
            <p className="text-AppWhite/85 font-[ubuntu-sans-mono-font] max-w-xl mx-auto mt-4 text-base sm:text-lg">
              Select how you would like to sign in. Staff manage results; students
              and parents view performance reports online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {portalCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.id}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-reveal group flex flex-col gap-5 rounded-3xl border-2 border-AppYellow/40 bg-black/50 backdrop-blur-md p-8 sm:p-10 text-AppWhite transition-all duration-500 hover:border-AppYellow hover:bg-black/65 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(192,167,66,0.25)]`}
                  style={{ animationDelay: `${0.15 + index * 0.12}s` }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-AppYellow text-AppBlack text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon aria-hidden />
                  </div>
                  <div>
                    <p className="text-AppYellow/90 font-[ubuntu-sans-mono-font] text-xs uppercase tracking-widest mb-1">
                      {card.subtitle}
                    </p>
                    <h2 className="font-[ubuntu-sans-mono-font] text-2xl sm:text-3xl font-black uppercase">
                      {card.title}
                    </h2>
                  </div>
                  <p className="font-[ubuntu-sans-mono-font] text-sm sm:text-base text-AppWhite/80 leading-relaxed flex-1">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center gap-2 self-start rounded-full bg-AppYellow text-AppBlack px-6 py-3 font-[ubuntu-sans-mono-font] text-sm font-bold uppercase tracking-wide transition-all duration-300 group-hover:gap-3 group-hover:shadow-[0_8px_24px_rgba(192,167,66,0.4)]">
                    {card.cta}
                    <FaArrowRightLong />
                  </span>
                </a>
              );
            })}
          </div>

          <div
            className={`contact-reveal contact-reveal-delay-3 mt-12 flex items-start justify-center gap-3 max-w-lg mx-auto rounded-2xl border border-AppYellow/30 bg-black/40 backdrop-blur-sm px-5 py-4 text-AppWhite/80`}
          >
            <FaShieldHalved className="text-AppYellow text-xl shrink-0 mt-0.5" />
            <p className="font-[ubuntu-sans-mono-font] text-xs sm:text-sm text-center sm:text-left">
              For login issues or password reset, contact the school admin office.
              Do not share your credentials with anyone.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`py-10 ${dark ? "bg-AppDarkElevated text-AppCream" : "bg-AppYellow/10 text-AppBlack"}`}
      >
        <div className="container text-center font-[ubuntu-sans-mono-font] text-sm opacity-80">
          You will be redirected to our secure result management system hosted
          online.
        </div>
      </section>
    </div>
  );
};

export default ResultPortal;
