import Logo from "../../public/SeaHausLogo.svg"
import ContentfulImage from '../ui/ContentfulImage'

import Facebook from "../../public/facebook.svg"
import Instagram from "../../public/instagram.svg"


import Link from "next/link";

const Layout = ({ children }) => {
    return (
        <>
            <header className="header inside-xxl">
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
            </header>
            <main>
                {children}
            </main>
            <footer className="mainFooter">
                <div className="socialFooter flex-vertical">

                    <div className="always-flex justify-center">
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
            </footer>
        </>
    )
}

export default Layout;