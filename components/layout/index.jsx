import Logo from "../../public/McFaddenLogo.svg"
import ContentfulImage from '../ui/ContentfulImage'

import Facebook from "../../public/facebook.svg"
import Instagram from "../../public/instagram.svg"


import Link from "next/link";


import HamNew from "../HamNew";


const Layout = ({ children }) => {
    return (
        <>
            <header className="header">
                <div className="upperLeft always-flex">
                    <HamNew />
                    <div className="logo">
                        <Link href="/">
                        <ContentfulImage
                            alt='McFadden Logo'
                            src={Logo}
                            width='100'
                            height='100'
                        />
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer className="mainFooter">
                <div className="inside-xxl flex-md justify">
                    <div>
                        <p>&copy; 2023 Michael McFadden Design - All Rights Reserved</p>
                        <ul className="footerLinks">
                            <li>
                                <Link href="/" className="link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="link">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/testimonials" className="link">
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="link">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="socialFooter flex-vertical">

                        <div className="always-flex">
                            <a href="http://facebook.com">
                                <ContentfulImage
                                    alt='Facebook Social'
                                    src={Facebook}
                                    width='44'
                                    height='44'
                                />
                            </a>
                            <a href="http://instagram.com">
                                <ContentfulImage
                                    alt='Instagram Social'
                                    src={Instagram}
                                    width='44'
                                    height='44'
                                />
                            </a>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout;