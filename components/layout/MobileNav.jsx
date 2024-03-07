import Link from "next/link"
import PalmLogo from "./PalmLogo"
//import BookNew from "../BookNew"
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
                        <Link onClick={onClick} href="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link onClick={onClick} href="/ratesbooking">Rates &amp; Booking</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default MobileNav