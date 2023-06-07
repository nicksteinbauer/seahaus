import Logo from "../../public/McFaddenLogo.svg"
import ContentfulImage from '../ui/ContentfulImage'


import HamNew from "../HamNew";


const Layout = ({ children }) => {
    return (
        <>
            <header className="header">
                <div className="upperLeft always-flex">
                    <HamNew />
                    <div className="logo">
                        <ContentfulImage
                            alt='McFadden Logo'
                            src={Logo}
                            width='100'
                            height='100'
                        />
                    </div>
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer className="mainFooter">
                <div className="inside-xxl">
                    <p>Footer</p>
                </div>
            </footer>
        </>
    )
}

export default Layout;