import Link from "next/link"
import PalmLogo from "./PalmLogo"
function MobileNav({onClick}) {
  return (
    <div className="mobileNav">
        <div className="text-center inside-xxl">
            <nav className="mainNav">
                <ul className="inside-sm">
                    <li className="palmLogo">
                        <Link onClick={onClick} href="/"><PalmLogo /></Link>
                    </li>
                    <li>
                        <Link onClick={onClick} href="/stay">Stay</Link>
                    </li>
                    <li>
                        <Link onClick={onClick} href="/">Experience</Link>
                    </li>
                    <li>
                        <Link onClick={onClick} href="/">Rates &amp; Booking</Link>
                    </li>
                    <li className="reserve">
                        <Link onClick={onClick} href="/">Reserve Now</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default MobileNav