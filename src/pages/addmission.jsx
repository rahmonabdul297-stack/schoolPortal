import {
  FaArrowRightLong,
  FaCertificate,
  FaClipboardCheck,
  FaEnvelope,
  FaFileLines,
  FaIdCard,
  FaImage,
  FaMoneyBillWave,
  FaNotesMedical,
  FaSchool,
} from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../components/context/context";
import {
  admissionSteps,
  primaryAdmissionRequirements,
  SCHOOL_EMAIL,
} from "../components/Arrays/array";

const requirementIcons = {
  form: FaFileLines,
  birth: FaCertificate,
  photo: FaImage,
  health: FaNotesMedical,
  report: FaSchool,
  id: FaIdCard,
  assessment: FaClipboardCheck,
  payment: FaMoneyBillWave,
};

const Addmission = () => {
  const { dark } = useContext(CartContext);

  const panelClass = `${
    dark ? "bg-AppDarkElevated text-AppCream" : "bg-AppWhite text-AppBlack"
  } rounded-3xl border-2 border-AppYellow/30 p-6 sm:p-8 shadow-lg contact-card-lift`;

  return (
    <div className={`pt-20 min-h-screen ${dark ? "bg-AppDark" : "bg-AppWhite"}`}>
      <Helmet>
        <title>Admission | Ayodele Schools</title>
        <meta
          name="description"
          content="Primary school admission requirements and enrolment steps at Ayodele Schools, Sagamu."
        />
      </Helmet>

      <section
        className="relative bg-cover bg-center bg-no-repeat contact-hero-in"
        style={{ backgroundImage: "url('/images/school img.webp')" }}
      >
        <div className="bg-black/65 py-16 sm:py-24">
          <div className="container text-center">
            <p className="text-AppYellow uppercase font-[ubuntu-sans-mono-font] text-sm tracking-[0.2em] mb-3">
              Join our community
            </p>
            <h1 className="text-AppWhite font-[ubuntu-sans-mono-font] text-3xl sm:text-5xl lg:text-6xl font-black uppercase">
              Primary School Admission
            </h1>
            <p className="text-AppWhite/80 font-[ubuntu-sans-mono-font] max-w-2xl mx-auto mt-4 text-base sm:text-lg">
              Everything you need to prepare before your child gains admission
              into Ayodele Schools Primary Section.
            </p>
          </div>
        </div>
      </section>

      <section className={`py-14 sm:py-20 ${dark ? "bg-AppDarkMuted/40" : "bg-AppYellow/10"}`}>
        <div className="container flex flex-col gap-12">
          <div className={`contact-reveal ${panelClass}`}>
            <h2 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-2xl mb-4">
              Admission process
            </h2>
            <p
              className={`font-[ubuntu-sans-mono-font] mb-8 ${
                dark ? "text-AppCream/75" : "text-AppBlack/75"
              }`}
            >
              Follow these steps to secure a place for your child in our Primary
              section. Our admissions team will guide you at every stage.
            </p>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {admissionSteps.map((item, index) => (
                <li
                  key={item.id}
                  className={`contact-reveal rounded-2xl p-4 border border-AppYellow/25 ${
                    dark ? "bg-AppDarkMuted border border-AppYellow/15" : "bg-AppYellow/10"
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.08}s` }}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-AppYellow text-AppBlack font-black font-[ubuntu-sans-mono-font] mb-3">
                    {item.id}
                  </span>
                  <h3 className="font-[ubuntu-sans-mono-font] font-bold text-AppYellow text-sm uppercase mb-2">
                    {item.step}
                  </h3>
                  <p className="font-[ubuntu-sans-mono-font] text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="text-center mb-10 contact-reveal">
              <h2
                className={`${
                  dark ? "text-AppCream" : "text-AppBlack"
                } font-[ubuntu-sans-mono-font] text-3xl sm:text-4xl font-black uppercase`}
              >
                Requirements before admission
              </h2>
              <p
                className={`font-[ubuntu-sans-mono-font] mt-3 max-w-2xl mx-auto ${
                  dark ? "text-AppCream/70" : "text-AppBlack/70"
                }`}
              >
                Please prepare the following documents and items before visiting
                the school for enrolment into Primary School.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {primaryAdmissionRequirements.map((req, index) => {
                const Icon = requirementIcons[req.icon] || FaFileLines;
                return (
                  <article
                    key={req.id}
                    className={`contact-reveal ${panelClass} flex flex-col gap-3`}
                    style={{ animationDelay: `${0.12 + index * 0.06}s` }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-AppYellow/20 text-AppYellow text-2xl transition-transform duration-500 group-hover:scale-110">
                      <Icon aria-hidden />
                    </div>
                    <h3 className="font-[ubuntu-sans-mono-font] font-bold text-lg capitalize">
                      {req.title}
                    </h3>
                    <p
                      className={`font-[ubuntu-sans-mono-font] text-sm leading-relaxed flex-1 ${
                        dark ? "text-AppCream/75" : "text-AppBlack/75"
                      }`}
                    >
                      {req.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div
            className={`contact-reveal contact-reveal-delay-3 ${panelClass} flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6`}
          >
            <div>
              <h2 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-xl mb-2">
                Ready to apply?
              </h2>
              <p className="font-[ubuntu-sans-mono-font] text-sm sm:text-base">
                Contact our admissions office or visit the school with your
                documents. Email:{" "}
                <a
                  href={`mailto:${SCHOOL_EMAIL}`}
                  className="text-AppYellow hover:underline normal-case"
                >
                  {SCHOOL_EMAIL}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-AppYellow text-AppBlack px-8 py-3 font-[ubuntu-sans-mono-font] font-bold uppercase text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(192,167,66,0.45)]"
              >
                Contact admissions <FaArrowRightLong />
              </Link>
              <Link
                to="/faq"
                className={`inline-flex items-center gap-2 rounded-full border-2 border-AppYellow px-8 py-3 font-[ubuntu-sans-mono-font] font-bold uppercase text-sm transition-all duration-300 hover:bg-AppYellow/10 ${
                  dark ? "text-AppCream" : "text-AppBlack"
                }`}
              >
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Addmission;
