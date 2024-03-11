import { useState } from "react";

import ContentfulImage from "../ui/ContentfulImage"
import Logo from "../../public/SeaHausLogo.svg"
import Link from "next/link"
import Nav from "./Nav"
import HamNav from "./HamNav"
import BookNew from "../BookNew"
function Header() {
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
    <>
        <header
        className={
            navigate
            ? "header inside-xxl navigate"
            : "header inside-xxl"
        }
        >
            <div className="always-flex justify-center">
                <div className="logo">
                    <Link href="/">
                        <ContentfulImage
                            alt='SeaHaus Logo'
                            src={Logo}
                            width='200'
                            height='200'
                        />
                    </Link>
                </div>
            </div>
            <div className="reserve flex-vertical">
                <BookNew />
            </div>
        </header>
        <Nav navigate={navigate} />
        <HamNav />
    </>
  )
}

export default Header