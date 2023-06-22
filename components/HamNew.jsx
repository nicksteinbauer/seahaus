
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
        <button onClick={()=>setMobileMenu(!MobileMenu)} className="hamburger">
            Contact Us
        </button>
        )}
        
        {MobileMenu && (
            <div className="navigation flex-vertical">
                <div className="modalWindow">
                    <nav ref={ref} className="modalRef inside-xxs">
                        <ContactForm />
                    </nav>
                    
                    <div className="inModal inside-xxs">
                        <button className="hamburger">
                            Close
                        </button>
                    </div>
                </div>
            </div> 
        )}
    </nav>




  )
}
