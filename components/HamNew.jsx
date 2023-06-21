
import { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react";

import Facebook from "../public/facebook.svg"
import Instagram from "../public/instagram.svg"
import ContentfulImage from './ui/ContentfulImage'

import { useClickAway } from "@uidotdev/usehooks";

import Link from "next/link";


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
                <div className="modalWindow inside-md">
                    <nav ref={ref} className="modalRef">
                        Contact Form
                    </nav>
                    
                    <div className="inModal">
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
