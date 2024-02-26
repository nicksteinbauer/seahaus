
import { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react";

// import Facebook from "../public/facebook.svg"
// import Instagram from "../public/instagram.svg"
// import ContentfulImage from './ui/ContentfulImage'

import { useClickAway } from "@uidotdev/usehooks";

//import Link from "next/link";

import ContactForm from "./contact/ContactForm";


export default function HamNew() {

    const [MobileMenu, setMobileMenu] = useState(false);
    const { pathname } = useRouter();

    const ref = useClickAway(() => {
        setMobileMenu(false);
    });
    
    useEffect(() => {
        setMobileMenu(false); // close menu if path changes!
        if (MobileMenu === false) {
            setMobileMenu(false);
          }
    }, [ pathname ]);

  return (
    
    <nav>
        {!MobileMenu && (
        <button onClick={()=>setMobileMenu(!MobileMenu)} className="hamburgerFooter">
            Contact Us
        </button>
        )}
        
        {MobileMenu && (
            <div className="navigation flex-vertical">
                <div className="modalWindow">
                    <div className="inside-xxs makeRelative">
                        <button className="hamburgerClose flex-vertical active">
                            <div className="closeContainer">
                                <div className="close close1"></div>
                                <div className="close close2"></div>
                            </div>
                        </button>
                        <nav ref={ref} className="modalRef">
                            <ContactForm />
                        </nav>
                    </div>
                </div>
            </div> 
        )}
    </nav>




  )
}
