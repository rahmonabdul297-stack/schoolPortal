import { FaMinus, FaPlus } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { CartContext } from "../components/context/context";
import { faqsArr } from "../components/Arrays/array";

const Faq = () => {
  const { dark } = useContext(CartContext);
  const [selected, setSelected] = useState(0);

  return (
    <div className="pt-20">
      <Helmet>
        <title>FAQs | Ayodele nursery & primary School</title>
        <meta
          name="description"
          content="Frequently asked questions about Ayodele nursery & primary School — admissions, programmes, results, and more."
        />
      </Helmet>

      <section className={`${dark ? "bg-AppDarkMuted" : "bg-AppYellow/20"} py-20`}>
        <div className="container flex flex-col items-center justify-center">
          <h4
            className={`${dark ? "text-AppCream" : "text-AppBlack"} text-xl lg:text-6xl font-[ubuntu-sans-mono-font] uppercase text-center pb-6`}
          >
            Frequently Asked Questions
          </h4>
          <p
            className={`${dark ? "text-AppMuted" : "text-AppBlack/70"} font-[ubuntu-sans-mono-font] text-center max-w-2xl pb-10`}
          >
            Find answers to common questions about Ayodele Schools. Tap a
            question to read more.
          </p>

          <div className="w-full lg:w-[700px] flex flex-col gap-2">
            {faqsArr.map((faq) => (
              <div
                key={faq.id}
                className={`${dark ? "bg-AppDarkElevated border border-AppYellow/20 text-AppCream" : "bg-AppYellow/20"} p-4 flex flex-col gap-3 shadow-2xs rounded-3xl hover:scale-[0.99] duration-300`}
              >
                <div className="w-full flex justify-between items-start gap-4">
                  <h2 className="font-[ubuntu-sans-mono-font] text-base lg:text-lg font-bold text-left">
                    {faq.question}
                  </h2>
                  <button
                    type="button"
                    className="shrink-0 cursor-pointer"
                    onClick={() =>
                      setSelected(selected === faq.id ? 0 : faq.id)
                    }
                    aria-expanded={selected === faq.id}
                  >
                    {selected === faq.id ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>
                {selected === faq.id && (
                  <p
                    className={`text-sm lg:text-base font-[ubuntu-sans-mono-font] text-left ${
                      dark ? "text-AppMuted" : "text-black/70"
                    }`}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
