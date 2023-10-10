"use client"
import { CarsProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
interface carCardProps {
  car: CarsProps;
}
const CarCard = ({ car }: carCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="group car-card mx-4">
      <h2 className="car-card__title">
        {make} {model}
      </h2>
      <p className="car-card__price">
        <span className="text-lg font-normal self-start me-1 ">$</span>
        {carRent}
        <span className="text-lg font-normal self-end me-1">/day</span>
      </p>
      <div className="car-card__image-container">
        <Image
          src="/image-card.png"
          fill
          alt="car card"
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image src="/wheel.png" alt="whell image" width={20} height={20} />
            <p className="text-[14px] leading-[17px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image src="/tire.png" alt="whell image" width={20} height={20} />
            <p className="text-[14px] leading-[17px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image src="/gaz.png" alt="whell image" width={20} height={20} />
            <p className="text-[14px] leading-[17px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
        <CustomButton
            title="Show Details"
            rightIcon="/arrow-right.svg"
            iconStyle="invert ms-2"
            containerStyles="flex items-center w-full h-12 bg-primary uppercase text-white p-5  rounded-[0.625rem] border-solid  text-[1.125rem] font-normal leading-[100%] tracking-[0.03125rem]"
            handleClick={() => setIsOpen(true)}
        />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
