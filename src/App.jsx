import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../public/styles/global.css";
import { ToastContainer } from "react-toastify";
import GeneralLayout from "./layouts/GeneralLayout";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ProductLayout from "./layouts/ProductLayout";

import Addmission from "./pages/addmission";
import Faq from "./pages/faq";
import ResultPortal from "./pages/resultPortal";
import Scholarship from "./pages/scholarship";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "./components/context/context";

function App() {
  const { dark } = useContext(CartContext);
  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-2">
        <MdKeyboardDoubleArrowUp
          size={30}
          color={dark ? "white" : " yellow"}
          className="animate-bounce"
        />

        <a
          href="https://wa.me/+2348037217256"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`border ${dark ? "border-AppYellow" : "border-AppBlack"} rounded-[50%] p-1`}
          >
            <IoLogoWhatsapp size={30} color="green" className="animate-pulse" />
          </div>
        </a>
      </div>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route element={<GeneralLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/addmission" element={<Addmission />} />
            <Route path="/result-portal" element={<ResultPortal />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/faq" element={<Faq />} />
          </Route>

          <Route element={<ProductLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
