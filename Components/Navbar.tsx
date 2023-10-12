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
                containerStyles="btn__shopping-cart"
            />
            <CustomButton
                title="Login"
                containerStyles="btn__login"
            />

        </div>
    </header>
  )
}

export default Navbar