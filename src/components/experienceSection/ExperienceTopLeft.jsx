import ExperienceInfo from "./ExperienceInfo";
import { FaIndianRupeeSign } from "react-icons/fa6";

const ExperienceTopLeft = () => {
  const rupeeSymbol = '\u20B9';
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="2" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="10" text="Websites" />
      </div>
      <p className="text-center">
        With 2 years of experience building dynamic and user-friendly web
        applications.
      </p>
      <ExperienceInfo number={`${rupeeSymbol} 100K`} text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
