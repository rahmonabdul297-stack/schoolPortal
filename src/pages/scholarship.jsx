import {
  FaArrowRightLong,
  FaAward,
  FaHandHoldingHeart,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../components/context/context";
import {
  scholarshipLegacyPoints,
  scholarshipPillars,
  SCHOOL_EMAIL,
} from "../components/Arrays/array";

const Scholarship = () => {
  const { dark } = useContext(CartContext);

  const panelClass = `${
    dark ? "bg-AppDarkElevated text-AppCream" : "bg-AppWhite text-AppBlack"
  } rounded-3xl border-2 border-AppYellow/30 p-6 sm:p-8 shadow-lg contact-card-lift`;

  return (
    <div className="pt-20 min-h-screen">
      <Helmet>
        <title>Scholarship Scheme | Ayodele nursery & primary School</title>
        <meta
          name="description"
          content="Ayodele nursery & primary School scholarship scheme — empowering excellence and transforming lives through merit and need-based support."
        />
      </Helmet>

      <section
        className="relative bg-cover bg-center bg-no-repeat contact-hero-in"
        style={{ backgroundImage: "url('/images/cert 1.webp')" }}
      >
        <div className="bg-black/70 py-16 sm:py-24">
          <div className="container text-center">
            <p className="text-AppYellow uppercase font-[ubuntu-sans-mono-font] text-sm tracking-[0.25em] mb-3">
              Learn more about what we do
            </p>
            <h1 className="text-AppWhite font-[ubuntu-sans-mono-font] text-3xl sm:text-5xl lg:text-6xl font-black uppercase">
              Our Scholarship Scheme
            </h1>
            <p className="text-AppYellow font-[ubuntu-sans-mono-font] text-lg sm:text-xl font-bold mt-4 max-w-3xl mx-auto">
              At Ayodele Schools: Empowering Excellence, Transforming Lives.
            </p>
          </div>
        </div>
      </section>

      <section className={`py-14 sm:py-20 ${dark ? "bg-AppDarkMuted/40" : "bg-AppYellow/10"}`}>
        <div className="container flex flex-col gap-10">
          <article className={`contact-reveal ${panelClass}`}>
            <p className="font-[ubuntu-sans-mono-font] text-base sm:text-lg leading-relaxed">
              Since its inception, our school&apos;s scholarship scheme has stood
              as a beacon of hope and a catalyst for academic brilliance. Over the
              years, it has opened doors for countless scholars, turning dreams
              into reality and shaping future leaders across various fields. The
              program does not merely reward merit; it creates a level playing
              field for the less privileged yet deserving learners, ensuring that
              financial constraints never become a barrier to education.
            </p>
          </article>

          <div className="contact-reveal contact-reveal-delay-1">
            <h2 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-2xl sm:text-3xl mb-6 text-center">
              Scholarship: A Legacy of Achievement
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {scholarshipLegacyPoints.map((item, index) => (
                <div
                  key={item.id}
                  className={panelClass}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-AppYellow/20 text-AppYellow text-xl mb-4">
                    <FaAward aria-hidden />
                  </div>
                  <h3 className="font-[ubuntu-sans-mono-font] font-bold text-lg text-AppYellow mb-2">
                    {item.title}
                  </h3>
                  <p
                    className={`font-[ubuntu-sans-mono-font] text-sm sm:text-base leading-relaxed ${
                      dark ? "text-AppCream/80" : "text-AppBlack/80"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-reveal contact-reveal-delay-2">
            <h2 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-2xl sm:text-3xl mb-6 text-center">
              Core Pillars of the Scheme
            </h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {scholarshipPillars.map((pillar, index) => (
                <div
                  key={pillar.id}
                  className={panelClass}
                  style={{ animationDelay: `${0.15 + index * 0.08}s` }}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-AppYellow text-AppBlack font-black font-[ubuntu-sans-mono-font] mb-4">
                    {pillar.id}
                  </span>
                  <h3 className="font-[ubuntu-sans-mono-font] font-bold text-lg mb-3">
                    {pillar.title}
                  </h3>
                  <p
                    className={`font-[ubuntu-sans-mono-font] text-sm sm:text-base leading-relaxed ${
                      dark ? "text-AppCream/80" : "text-AppBlack/80"
                    }`}
                  >
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <article
            className={`contact-reveal contact-reveal-delay-3 ${panelClass} flex flex-col sm:flex-row gap-6 items-start`}
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-AppYellow/20 text-AppYellow text-2xl">
              <FaLightbulb aria-hidden />
            </div>
            <div>
              <h2 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-xl mb-3">
                Why It Matters
              </h2>
              <p className="font-[ubuntu-sans-mono-font] text-sm sm:text-base leading-relaxed">
                By investing in talent without bias, our school cultivates a
                diverse community of thinkers and innovators. The ripple effect is
                evident: scholars give back through community service, inspire
                peers, and contribute to national development.
              </p>
            </div>
          </article>

          <article
            className={`contact-reveal contact-reveal-delay-4 ${panelClass} border-AppYellow bg-gradient-to-br ${
              dark
                ? "from-AppYellow/20 to-AppDarkElevated"
                : "from-AppYellow/25 to-AppWhite"
            }`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-AppYellow text-AppBlack text-2xl mb-4">
              <FaHandHoldingHeart aria-hidden />
            </div>
            <h2 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-xl mb-3">
              Call to Action
            </h2>
            <p
              className={`font-[ubuntu-sans-mono-font] text-sm sm:text-base leading-relaxed mb-6 ${
                dark ? "text-AppCream/85" : "text-AppBlack/85"
              }`}
            >
              We remain committed to expanding this transformative program.
              Donations, partnerships, and alumni contributions are welcomed to
              sustain and scale the impact, ensuring no bright mind is left
              behind.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-AppYellow text-AppBlack px-8 py-3 font-[ubuntu-sans-mono-font] font-bold uppercase text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(192,167,66,0.45)]"
              >
                Partner with us <FaArrowRightLong />
              </Link>
              <a
                href={`mailto:${SCHOOL_EMAIL}`}
                className={`inline-flex items-center gap-2 rounded-full border-2 border-AppYellow px-8 py-3 font-[ubuntu-sans-mono-font] font-bold uppercase text-sm transition-all duration-300 hover:bg-AppYellow/10 ${
                  dark ? "text-AppCream" : "text-AppBlack"
                }`}
              >
                Email us
              </a>
            </div>
          </article>

          <div
            className={`contact-reveal contact-reveal-delay-4 text-center rounded-3xl border-2 border-AppYellow p-8 sm:p-10 ${
              dark ? "bg-AppYellow/10" : "bg-AppYellow/20"
            }`}
          >
            <FaUsers className="text-AppYellow text-4xl mx-auto mb-4" />
            <p className="font-[ubuntu-sans-mono-font] text-xl sm:text-2xl font-black uppercase text-AppYellow">
              Empowering today&apos;s scholars, shaping tomorrow&apos;s leaders!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarship;
