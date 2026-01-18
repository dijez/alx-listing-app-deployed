import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label}) => {

    return(
         <div className="flex justify-center items-center bg-[#F9F9F9F] 
        px-3 w-auto h-[27px] rounded-full">
            <p className="text-sm ">{label}</p>
        </div>
    );
}

export default Pill;