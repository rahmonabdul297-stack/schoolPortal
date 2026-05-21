import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebook,
  FaSquareInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useCallback, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../components/context/context";
import { errorNotification, successNotification } from "../utils/helper";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

/** HTML body for the inbox — matches portfolio gold / deep black palette (inline styles for email clients). */
function buildEmailHtml({ name, email, message }) {
  const safe = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  const nl = (s) => safe(s).replace(/\n/g, "<br/>");
  return message;
}
const ContactPage = () => {
  const {dark}=useContext(CartContext)
  const accessKey = import.meta.env.VITE_FORM_ACCESS_KEY;
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const closeForm = useCallback(() => {
    setFormOpen(false);
    setStatus("idle");
    setFeedback("");
  }, []);

  useEffect(() => {
    if (!formOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") closeForm();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [formOpen, closeForm]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!accessKey) {
      setFeedback("try again later!");
      setStatus("error");
      return;
    }
  
    setStatus("sending");
    setFeedback("");
    try {
        if(!name || !email || !message){
      errorNotification("field are required!")
        setFeedback("field are required!")
      return;
    }
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `You have a message from ${name.trim()}`,
          from_name: "Ayodele school website",
          name: name.trim(),
          email: email.trim(),
          replyto: email.trim(),
          message: buildEmailHtml({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
          }),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFeedback(
          "message sent successfully — we'll get back to you shortly!.",
        );
        successNotification("message sent successfully — we'll get back to you shortly!")
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setFeedback(data.message || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Check your connection and try again!.");
    }
  }
  return (
    <div className={`${dark?"bg-[#ccc] ":"bg-AppWhite" } py-24`}>
      <div className=" mx-auto flex min-h-screen w-[80%] items-center justify-center p-4 sm:p-6 py-8 sm:py-10 ">
        <div className={`${dark?"bg-AppYellow/40 ":"bg-AppWhite" }mx-auto w-full min-w-0 max-w-lg rounded-2xl border border-[#C9A84C]/25 p-6 sm:p-10 text-left`}>
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="min-w-0 pr-2">
              <h4
                id="contact-form-title"
                className="font-serif text-xl sm:text-2xl text-AppBlack capitalize"
              >
                contact us
              </h4>
            </div>
          </div>

          <form
            className="contact-form flex flex-col gap-4 sm:gap-6"
            onSubmit={handleSubmit}
          >
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            <div className={`w-full flex flex-col gap-3`}>
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="write…"
              />
            </div>

            {feedback && (
              <p
                className={`text-sm ${status === "success" ? "text-green-600" : "text-red-500"}`}
                role="status"
              >
                {feedback}
              </p>
            )}

            <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 w-full rounded-full px-8 py-3.5 text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 disabled:opacity-55 disabled:cursor-not-allowed hover:shadow-[0_0_24px_rgba(201,168,76,0.25)]"
                style={{
                  background:
                    "linear-gradient(135deg, #222, #222, #222)",
                  color: "#fff",
                }}
              >
                {status === "sending" ? "Sending…" : "Send"}
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
