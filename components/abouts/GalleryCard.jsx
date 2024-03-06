//import Link from 'next/link'
import RichText from '../RichText'

import FeaturedImage1 from '../ui/FeaturedImage1'
import FeaturedImage2 from '../ui/FeaturedImage2'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'


const GalleryCard = ({ secondOne }) => {
    let animateThis1 = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.to(animateThis1, {
          scrollTrigger: {
            trigger: animateThis1,
            toggleClass: "showThis",
            start: '100 bottom'
          },
          duration: 2,
          
      });
    
    });
    
    return (
       
        <div className='galleryCard noShow' ref={(el1) => { animateThis1 = el1; }}>
            <div className='inside-xxl flex-md'>
                {secondOne.featuredImage && (
                <div className='sixty always-flex'>
                    <div className='featured1'>
                        <FeaturedImage1
                            alt={`Cover Image for ${secondOne.title}`}
                            src={secondOne.featuredImage.url}
                            width={secondOne.featuredImage.width}
                            height={secondOne.featuredImage.height}
                        />
                    </div>
                    <div className='featured2'>
                        <FeaturedImage2
                            alt={`Cover Image for ${secondOne.title}`}
                            src={secondOne.additionalImage.url}
                            width={secondOne.additionalImage.width}
                            height={secondOne.additionalImage.height}
                        />
                    </div>
                </div>
                )}
                <div className='forty content flex-vertical'>
                    <RichText content={secondOne.content} />
                </div>
            </div>
        </div>
          
    )
}

export default GalleryCard