import { AiFillTikTok } from "react-icons/ai";
import {
  FaArrowRightLong,
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaLocationDot,
  FaPhone,
  FaSquareInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { CartContext } from "../components/context/context";
import {
  contactSchoolInfo,
  SCHOOL_EMAIL,
} from "../components/Arrays/array";
import { errorNotification, successNotification } from "../utils/helper";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const INQUIRY_OPTIONS = [
  "General enquiry",
  "Admission",
  "Fees & payments",
  "Academic support",
  "Visit / tour request",
  "Other",
];

function buildEmailHtml({ name, email, phone, subject, message }) {
  const safe = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  const nl = (s) => safe(s).replace(/\n/g, "<br/>");
  return message
}

const ContactPage = () => {
  const { dark } = useContext(CartContext);
  const accessKey = import.meta.env.VITE_FORM_ACCESS_KEY;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(INQUIRY_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!accessKey) {
      setFeedback("Please try again later.");
      setStatus("error");
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      errorNotification("All required fields must be filled.");
      setFeedback("Please complete all required fields.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[${subject}] Message from ${name.trim()}`,
          from_name: "Ayodele Schools Website",
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          replyto: email.trim(),
          message: buildEmailHtml({
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            subject,
            message: message.trim(),
          }),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFeedback(
          "Your message was sent successfully. We will get back to you shortly.",
        );
        successNotification(
          "Message sent successfully — we'll get back to you shortly!",
        );
        setName("");
        setEmail("");
        setPhone("");
        setSubject(INQUIRY_OPTIONS[0]);
        setMessage("");
      } else {
        setStatus("error");
        setFeedback(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Check your connection and try again.");
    }
  }

  const labelClass = `text-sm font-semibold uppercase tracking-wide font-[ubuntu-sans-mono-font] ${
    dark ? "text-AppCream" : "text-AppBlack"
  }`;

  const panelClass = `${
    dark ? "bg-AppDarkElevated text-AppCream" : "bg-AppWhite text-AppBlack"
  } rounded-3xl border-2 border-AppYellow/30 p-6 sm:p-8 shadow-lg contact-card-lift`;

  return (
    <div className={`pt-20 min-h-screen ${dark ? "bg-AppDark" : "bg-AppWhite"}`}>
      <Helmet>
        <title>Contact Us | Ayodele Schools</title>
        <meta
          name="description"
          content="Contact Ayodele Schools in Sagamu for admissions, enquiries, and support. Email ayodelecollege247@gmail.com."
        />
      </Helmet>

      <section
        className="relative bg-cover bg-center bg-no-repeat contact-hero-in"
        style={{ backgroundImage: "url('/images/school frontage.webp')" }}
      >
        <div className="bg-black/65 py-16 sm:py-24">
          <div className="container text-center">
            <p className="text-AppYellow uppercase font-[ubuntu-sans-mono-font] text-sm sm:text-base tracking-[0.2em] mb-3">
              Get in touch
            </p>
            <h1 className="text-AppWhite font-[ubuntu-sans-mono-font] text-3xl sm:text-5xl lg:text-6xl font-black uppercase">
              Contact Ayodele Schools
            </h1>
            <p className="text-AppWhite/80 font-[ubuntu-sans-mono-font] max-w-2xl mx-auto mt-4 text-base sm:text-lg">
              We are here to answer your questions about admissions, academics,
              and student welfare. Reach out and our team will respond promptly.
            </p>
          </div>
        </div>
      </section>

      <section className={`py-14 sm:py-20 ${dark ? "bg-AppDarkMuted/50" : "bg-AppYellow/10"}`}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            <aside className="lg:col-span-1 flex flex-col gap-6 contact-reveal">
              <div className={panelClass}>
                <h2 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-xl mb-6">
                  Contact details
                </h2>
                <ul className="flex flex-col gap-5 font-[ubuntu-sans-mono-font] text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-AppYellow shrink-0">
                      <FaEnvelope />
                    </span>
                    <div>
                      <span className="block font-bold uppercase text-xs tracking-wide text-AppYellow mb-1">
                        Email
                      </span>
                      <a
                        href={`mailto:${SCHOOL_EMAIL}`}
                        className="hover:text-AppYellow transition-colors duration-300 break-all normal-case"
                      >
                        {SCHOOL_EMAIL}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-AppYellow shrink-0">
                      <FaLocationDot />
                    </span>
                    <div>
                      <span className="block font-bold uppercase text-xs tracking-wide text-AppYellow mb-1">
                        Location
                      </span>
                      <span>Sagamu, Ogun State, Nigeria</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-AppYellow shrink-0">
                      <FaClock />
                    </span>
                    <div>
                      <span className="block font-bold uppercase text-xs tracking-wide text-AppYellow mb-1">
                        Office hours
                      </span>
                      <span>Monday – Friday: 8:00 AM – 4:00 PM</span>
                      <span className="block text-sm opacity-80 mt-1">
                        Saturday: 9:00 AM – 12:00 PM (by appointment)
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-AppYellow shrink-0">
                      <FaPhone />
                    </span>
                    <div>
                      <span className="block font-bold uppercase text-xs tracking-wide text-AppYellow mb-1">
                        Phone
                      </span>
                      <span className="opacity-80">
                      08037217256, 08032322688
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div
                className={`${panelClass} contact-reveal contact-reveal-delay-1`}
              >
                <h2 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-xl mb-4">
                  Follow us
                </h2>
                <div className="flex flex-wrap gap-4 text-2xl">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:text-AppYellow hover:scale-110 transition-all duration-300"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-AppYellow hover:scale-110 transition-all duration-300"
                  >
                    <FaSquareInstagram />
                  </a>
                  <a
                    href="#"
                    aria-label="X (Twitter)"
                    className="hover:text-AppYellow hover:scale-110 transition-all duration-300"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="hover:text-AppYellow hover:scale-110 transition-all duration-300"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="#"
                    aria-label="TikTok"
                    className="hover:text-AppYellow hover:scale-110 transition-all duration-300"
                  >
                    <AiFillTikTok />
                  </a>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-2 flex flex-col gap-8">
              <div
                className={`contact-reveal contact-reveal-delay-2 ${panelClass}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-AppYellow contact-pulse-dot" />
                  <h2 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-xl">
                    What you need to know
                  </h2>
                </div>
                <p
                  className={`font-[ubuntu-sans-mono-font] text-sm sm:text-base mb-6 ${
                    dark ? "text-AppCream/75" : "text-AppBlack/75"
                  }`}
                >
                  Before you visit or apply, here is a quick overview of
                  Ayodele Schools — one of the leading institutions in Sagamu and
                  surrounding communities.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactSchoolInfo.map((item, index) => (
                    <div
                      key={item.id}
                      className={`contact-reveal rounded-2xl p-4 border border-AppYellow/25 ${
                        dark ? "bg-AppDarkMuted border border-AppYellow/15" : "bg-AppYellow/10"
                      } hover:border-AppYellow transition-colors duration-500`}
                      style={{ animationDelay: `${0.15 + index * 0.1}s` }}
                    >
                      <h3 className="font-[ubuntu-sans-mono-font] font-bold text-AppYellow mb-2 capitalize">
                        {item.title}
                      </h3>
                      <p className="font-[ubuntu-sans-mono-font] text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-AppYellow font-[ubuntu-sans-mono-font] text-sm hover:gap-3 transition-all duration-300"
                  >
                    Learn more about us <FaArrowRightLong />
                  </Link>
                  <Link
                    to="/faq"
                    className="inline-flex items-center gap-2 text-AppYellow font-[ubuntu-sans-mono-font] text-sm hover:gap-3 transition-all duration-300"
                  >
                    Read FAQs <FaArrowRightLong />
                  </Link>
                </div>
              </div>

              <div
                className={`contact-reveal contact-reveal-delay-3 ${panelClass}`}
              >
                <h2 className="text-AppYellow uppercase font-black font-[ubuntu-sans-mono-font] text-xl mb-2">
                  Send us a message
                </h2>
                <p
                  className={`font-[ubuntu-sans-mono-font] text-sm mb-6 ${
                    dark ? "text-AppCream/70" : "text-AppBlack/70"
                  }`}
                >
                  Fill in the form below. Fields marked with{" "}
                  <span className="text-AppYellow">*</span> are required.
                </p>

                <form
                  className="flex flex-col gap-5 sm:gap-6"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className={labelClass}>
                        Full name <span className="text-AppYellow">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Adeola Ogunleye"
                        className={dark ? "text-AppCream placeholder:text-AppMuted" : ""}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-phone" className={labelClass}>
                        Phone number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0803 000 0000"
                        className={dark ? "text-AppCream placeholder:text-AppMuted" : ""}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-email" className={labelClass}>
                        Email address <span className="text-AppYellow">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className={dark ? "text-AppCream placeholder:text-AppMuted" : ""}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-subject" className={labelClass}>
                        Enquiry type
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className={dark ? "text-AppCream" : ""}
                      >
                        {INQUIRY_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className={labelClass}>
                      Your message <span className="text-AppYellow">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us how we can help — admission, visit, academics, or general enquiry…"
                      className={`resize-y min-h-[140px] ${
                        dark ? "text-AppCream placeholder:text-AppMuted" : ""
                      }`}
                    />
                  </div>

                  {feedback && (
                    <p
                      className={`text-sm font-[ubuntu-sans-mono-font] rounded-xl px-4 py-3 ${
                        status === "success"
                          ? "bg-green-500/15 text-green-700"
                          : "bg-red-500/15 text-red-600"
                      }`}
                      role="status"
                    >
                      {feedback}
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 border-t border-AppYellow/20">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full px-10 py-3.5 text-sm font-[ubuntu-sans-mono-font] font-bold uppercase tracking-wider bg-AppYellow text-AppBlack transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(192,167,66,0.45)] disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {status === "sending" ? "Sending…" : "Send message"}
                      {status !== "sending" && <FaArrowRightLong />}
                    </button>
                    <p
                      className={`text-xs font-[ubuntu-sans-mono-font] ${
                        dark ? "text-AppCream/50" : "text-AppBlack/50"
                      }`}
                    >
                      Or email us directly at{" "}
                      <a
                        href={`mailto:${SCHOOL_EMAIL}`}
                        className="text-AppYellow hover:underline normal-case"
                      >
                        {SCHOOL_EMAIL}
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
