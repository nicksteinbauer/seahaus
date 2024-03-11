import Image from 'next/image'

// import { useRef, useEffect } from 'react'
// import { gsap } from 'gsap'
// import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const FeaturedImage1 = props => {
  // let animateUp = useRef(null);
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.to(animateUp, {
//       scrollTrigger: {
//         trigger: animateUp,
//         start: '100 bottom',
//         scrub: 1,
//       },
//       duration: 2,
//       x: '0',
//       y: '-50',
//       ease: 'linear',
      
//   });

// });
  return <Image className='imgContain' loader={contentfulLoader} {...props}  />
}

export default FeaturedImage1