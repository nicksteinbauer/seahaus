import ContentfulImage from "../ui/ContentfulImage"
import Logo from "../../public/SeaHausLogo.svg"
import Link from "next/link"
import Nav from "./Nav"
import HamNav from "./HamNav"
import BookNew from "../BookNew"
function Header() {
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
            <div className="reserve flex-vertical">
                <BookNew />
            </div>
        </header>
        <Nav />
        <HamNav />
    </>
  )
}

export default Header