import Image from "next/image"
import { Button } from "."
import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <header className="header">
        <div className="header__logo">
            <Image src="/logo.png" width={132} height={41} alt="Logo "/>
        </div>
        <nav >
            <ul className="header__links">
                <li className="header__links__link">Home</li>
                <li className="header__links__link">About</li>
                <li className="header__links__link">How its works</li>
                <li className="header__links__link">Charging</li>
                <li className="header__links__link">Vehicls</li>
            </ul>
        </nav>
        <div className="header__account">
            <CustomButton
                title="My Cart"
                rightIcon="/shopping-cart.svg"
                containerStyles="flex items-center h-12 gap-2 px-4 py-4 uppercase  text-[1rem] font-normal leading-[100%] tracking-[0.03125rem] relative after:content-['2'] after:absolute after:bg-primary after:top-0 after:right-0 after:rounded-full after:w-5 after:h-5 after:text-white after:text-[12px] after:leading-[20px]"
            />
            <CustomButton
                title="Login"
                containerStyles="flex items-center h-12 bg-primary uppercase text-white px-7 py-4 rounded-[0.625rem] border-solid  text-[1.125rem] font-normal leading-[100%] tracking-[0.03125rem]"
            />

        </div>
    </header>
  )
}

export default Navbar