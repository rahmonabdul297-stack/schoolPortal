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

function App() {
  return (
    <>
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
