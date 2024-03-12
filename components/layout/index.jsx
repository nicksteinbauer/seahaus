import ContentfulImage from '../ui/ContentfulImage'

//import Facebook from "../../public/facebook.svg"
import Instagram from "../../public/instagram.svg"
import Header from "./Header";
import ContactForm from '../contact/ContactForm';


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <footer className="mainFooter">
                <div className="socialFooter inside-md justify-center">

                    <div className="flex-vertical justify-center flex1 text-center">
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