import ContentfulImage from '../ui/ContentfulImage'

//import Facebook from "../../public/facebook.svg"
import Instagram from "../../public/instagram.svg"
import Header from "./Header";



const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <footer className="mainFooter">
                <div className="socialFooter flex-vertical">

                    <div className="always-flex justify-center">
                        {/* <a href="http://facebook.com">
                            <ContentfulImage
                                alt='Facebook Social'
                                src={Facebook}
                                width='44'
                                height='44'
                            />
                        </a> */}
                        <a href="https://www.instagram.com/seahaus.exuma/">
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