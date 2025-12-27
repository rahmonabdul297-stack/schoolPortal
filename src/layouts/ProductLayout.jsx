import { Outlet } from "react-router-dom";
import GeneralFooter from "../components/GeneralFooter";
import ProductHeader from "../components/ProductHeader";

const ProductLayout = () => {
  return (
    <div>
      <ProductHeader />
      <Outlet />
      <GeneralFooter />
    </div>
  );
};
export default ProductLayout;
