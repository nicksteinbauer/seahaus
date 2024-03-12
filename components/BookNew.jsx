
import { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react";

import ContactForm from "./contact/ContactForm";

export default function BookNew() {

    const [BookNew, setBookNew] = useState(false);
    const { pathname } = useRouter();

    // const ref = useClickAway(() => {
    //     setBookNew(false);
    // });
    
    useEffect(() => {
        setBookNew(false); // close menu if path changes!
        if (BookNew === false) {
            setBookNew(false);
          }
    }, [ pathname ]);

  return (
    
    <>
        
        <button onClick={()=>setBookNew(!BookNew)} className="hamburgerFooter">
            Book Now
        </button>

        <div className={BookNew ? 'navigation flex-vertical booking' : 'navigation flex-vertical booking bookingactive'}>
            <div className="modalWindow">
                <div className="inside-sm makeRelative">
                    <button onClick={()=>setBookNew(!BookNew)} className="hamburgerClose flex-vertical active">
                        <div className="closeContainer">
                            <div className="close close1"></div>
                            <div className="close close2"></div>
                        </div>
                    </button>
                    <nav className="modalRef">
                    <ContactForm />
                    </nav>
                </div>
            </div>
        </div> 
        
    </>




  )
}
