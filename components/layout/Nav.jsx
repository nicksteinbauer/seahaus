import Link from "next/link"
import PalmLogo from "./PalmLogo"

function Nav({navigate}) {
    
    return (
        <div 
            id="Nav"
            className={
                navigate
                ? "lowerHeader active"
                : "lowerHeader"
            }
        >
            <div className="text-center inside-xxl">
                <nav className="mainNav">
                    <ul className="flex-sm justify-center">
                        <li className="palmLogo">
                            <Link href="/"><PalmLogo /></Link>
                        </li>
                        <li>
                            <Link href="/stay">Stay</Link>
                        </li>
                        <li>
                            <Link href="/experience">Experience</Link>
                        </li>
                        <li>
                            <Link href="/ratesbooking">Rates &amp; Booking</Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav