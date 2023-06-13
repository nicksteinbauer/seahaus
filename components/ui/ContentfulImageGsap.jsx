import Image from 'next/image'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImageGsap = props => {
  let animateThis1 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(animateThis1, {
      scrollTrigger: {
        trigger: animateThis1,
        toggleClass: "showThis"
      },
      duration: 2,
      
    });

});
  return <Image loader={contentfulLoader} {...props} ref={(el1) => { animateThis1 = el1; }} />
}

export default ContentfulImageGsap