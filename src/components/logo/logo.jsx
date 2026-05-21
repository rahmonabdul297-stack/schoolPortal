import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex gap-3 items-center ">
        <img
          src="/images/ayodele logo.webp"
          alt=""
          className="h-16 w-16 rounded-[50%]"
        />
        <div className="flex flex-col text-xl font-black uppercase overflow-hidden">
          <span>Ayodele</span>
          <span className="text-[#c0a742]">schools</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
