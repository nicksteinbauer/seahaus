import Head from 'next/head'

import StayCardInterior from '@/components/stay/StayCardInterior'
import StayPageCard from '@/components/stay/StayPageCard'

import { useState } from "react"


import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import NextJsImage from '@/components/stay/NextJsImage';
import image1 from "public/gallery/JustyPeachy1.jpg";
import image2 from "public/gallery/JustyPeachy2.jpg";
import image3 from "public/gallery/JustyPeachy3.jpg";
import image4 from "public/gallery/JustyPeachy4.jpg";
import image5 from "public/gallery/JustyPeachy5.jpg";
import image6 from "public/gallery/JustyPeachy6.jpg";
import image7 from "public/gallery/JustyPeachy7.jpg";


const images = [
  image1, image2, image3, image4, image5, image6, image7
];

const PrimarySuite = ({ stickyStays, mainStays }) => {
  const [open, setOpen] = useState(false);

  


  return (
    <main className='page all'>
    
      <Head>
        <title>SeaHaus Exuma Bahamas | Primary Suite</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <section className='projects interior' id='projects'>
        <div className='theRest'>
          
          {stickyStays.map((stay) => (
              <StayPageCard key={stay.slug} stay={stay} />
          ))}

          
          <div className='projectMap inside-xxl'>
            <div className='galleryTitle text-center flex-md justify-center'><h2>Gallery</h2> <div className='flex-vertical'><span className='smol'>- Click image for larger view</span></div></div>
            <div onClick={() => setOpen(true)}>
              Open
            </div>
            <ul className='projectGrid auto-grid-sm agSlight'>
              {mainStays.map((stay) => (
                <StayCardInterior 
                  key={stay.slug} 
                  stay={stay} 
                />
              ))}
            </ul>
          </div>
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          render={{ slide: NextJsImage }}
        />
        
        
      </section> 
    </main>
  )
}




export async function getStaticProps() {
  const result = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`, {
    method: 'POST', 
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify({
      query: `
        query {
          stickyStay:stayCollection(where: { category: "Primary Suite", categorySticky:true  }, limit: 1) {
            items {
              title
              slug
              content {
                json
              }
              image {
                url
                width
                height
              }
            }
          }
          mainStay:stayCollection(where: { category: "Primary Suite", sticky:false, categorySticky:false }) {
            items {
              title
              slug
              category
              imageThumb {
                url
                width
                height
              }
              image {
                url
                width
                height
              }
            }
          }
        }
      `,
    })
  });

  if(!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const stickyStays = data.stickyStay.items;
  const mainStays = data.mainStay.items;

  return {
    props: {
      stickyStays,
      mainStays
    }
  }

}
export default PrimarySuite