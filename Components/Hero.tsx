import { Genos } from "next/font/google";
import CustomButton from "./CustomButton";
import Image from "next/image";
const genos = Genos({ subsets: ["latin"] });
const Hero = () => {
  return (
    <>
      <main className="hero">
        <div className="hero__text">
          <h1 className="hero__title">
            Elevate <br /> your ride
          </h1>
          <p className="hero__desc">
          Rent an electric car and feel <br /> the power of the future.
          </p>
          <CustomButton
                title="Vehicles"
                rightIcon="/arrow-right.svg"
                iconStyle="invert ms-2"
                containerStyles="flex items-center h-12 bg-primary uppercase text-white p-7  rounded-[0.625rem] border-solid  text-[1.125rem] font-normal leading-[100%] tracking-[0.03125rem]"
            />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image 
              src="/Hero_cars.png"
              alt="hero cars"
              fill
              className="object-contain"
            />

          </div>
         
        </div>
        <div className="hero__image-overlay" />
      </main>
    </>
  );
};

export default Hero;
