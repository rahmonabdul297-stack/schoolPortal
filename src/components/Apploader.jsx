import { ClipLoader } from "react-spinners"

const Apploader = () => {
    return (
         <div className="text-appAqua w-[100%] h-[100%] flex flex-col gap-3 items-center justify-center ">
        <ClipLoader  
        size={50}
        color="#000"
        aria-label="loading spinner"
        data-testid="loader"
        />
    
    </div>
    )
}

export default Apploader
