import Link from "next/link"
import PalmLogo from "./PalmLogo"
import { useState } from "react";

function Nav() {
    const [navigate, setNavigate] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 230) {
        setNavigate(true);
        } else {
        setNavigate(false);
        }
    };
    if (typeof window !== `undefined`) {
        window.addEventListener('scroll', changeBackground);
    }
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
                            <Link href="/">Experience</Link>
                        </li>
                        <li>
                            <Link href="/">Rates &amp; Booking</Link>
                        </li>
                        <li className="reserve">
                            <Link href="/">Reserve Now</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav