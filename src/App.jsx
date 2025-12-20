import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../public/styles/global.css";
import { ToastContainer } from "react-toastify";
import GeneralLayout from "./layouts/GeneralLayout";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/about";

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
            <Route path="/" element={<HomePage  />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/about" element={<AboutPage  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
