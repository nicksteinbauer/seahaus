
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
        <button onClick={()=>setMobileMenu(!MobileMenu)} className="hamburger flex-vertical">
            
            <div className="hamContainer">
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
            
        </button>
        )}
        {MobileMenu && (
        <button className="hamburger flex-vertical active">
            <div className="closeContainer">
                <div className="close close1"></div>
                <div className="close close2"></div>
            </div>
        </button>
        )}
        {MobileMenu && (
            <nav ref={ref} className="navigation flex-vertical">
                
                <ul>
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

                <div className="always-flex social justify-center">
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
                

            </nav>
        )}
    </nav>




  )
}
