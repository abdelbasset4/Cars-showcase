"use client";
import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathname);
  };
  return (
    <div className="w-full flex justify-center items-start my-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="btn__showmore"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
