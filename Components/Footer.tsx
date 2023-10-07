import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="footer">
        <p className="footer__text">Electrify @ 2023. All rights reserved.</p>
        <ul className="footer__links">
          <li className="footer__links__link">Legal</li>
          <li className="footer__links__link">Insurance</li>
          <li className="footer__links__link">FAQ</li>
          <li className="footer__links__link">Contact</li>
          <li className="footer__links__link">Charging</li>
        </ul>

        <ul className="footer__social">
          <li>
            <Link href="/">
              <Image src="/youtube.svg" width={24} height={24} alt="Youtube Channel" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src="/facebook.svg" width={24} height={24} alt="Facebook Page" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src="/twitter.svg" width={24} height={24} alt="Twitter Account"/>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src="/instagram.svg" width={24} height={24} alt="Instagram profile"/>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src="/linkedin.svg" width={24} height={24} alt="LinkedIn Profile"/>
            </Link>
          </li>
        </ul>
    </footer>
  )
}

export default Footer