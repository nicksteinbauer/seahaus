import Image from 'next/image'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const FeaturedImage2 = props => {
  let animateDn = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(animateDn, {
      scrollTrigger: {
        trigger: animateDn,
        start: '100 bottom',
        scrub: 1,
      },
      duration: 2,
      x: '0',
      y: '50',
      ease: 'linear',
      
  });

});
  return <Image className='imgContain' loader={contentfulLoader} {...props} ref={(el1) => { animateDn = el1; }} />
}

export default FeaturedImage2