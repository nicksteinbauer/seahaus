import Head from 'next/head'

import { Inter } from 'next/font/google'

//import Script from 'next/script'

import ExperienceCard from '@/components/abouts/ExperienceCard'
import ExperienceConCard from '@/components/abouts/ExperienceConCard'
import GalleryCard from '@/components/abouts/GalleryCard'
const inter = Inter({ subsets: ['latin'] })

export default function Experience({ firstOnes, secondOnes, thirdOnes }) {
  
  return (
    <>
      <Head>
        <title>SeaHaus Exuma Bahamas | Experience Exuma at SeaHaus</title>
        <meta name="description" content="Escape to a beachfront haven on the tranquil shores of Three Sisters Beach in Exuma. Immerse yourself in natural beauty and modern luxury, from expansive ocean views to ocean-facing soaking tubs. With coastal charm and contemporary comfort, unwind and surrender to the allure of Exuma's pristine beaches." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#676450"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>

        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"></script>
      </Head>
      <main className='page all'>
        
        <section className='about text-center'>
          {firstOnes.map((firstOne) => (
            <ExperienceCard key={firstOne.slug} firstOne={firstOne} />
          ))}
        </section>

        <section className='experienceGrid'>
          {secondOnes.map((secondOne) => (
            <GalleryCard key={secondOne.slug} secondOne={secondOne} />
          ))}
        </section>

        <section className='about text-center'>
          {thirdOnes.map((thirdOne) => (
            <ExperienceConCard key={thirdOne.slug} thirdOne={thirdOne} />
          ))}
        </section>
        
      </main>
    </>
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
          
          firstOne: aboutCollection( where: { category: "Experience" }) {
            items {
              slug
              title
              excerpt {
                json
              }
              content {
                json
              }
              featuredImage {
                url
                width
                height
              }
            }
          }
          secondOne: aboutCollection(where: {additionalCategory: "Gallery"})  {
            items {
              slug
              title
              excerpt {
                json
              }
              content {
                json
              }
              featuredImage {
                url
                width
                height
              }
              additionalImage {
                url
                width
                height
              }
            }
          }
          thirdOne: aboutCollection( where: {additionalCategory: "Concierge"}) {
            items {
              slug
              title
              excerpt {
                json
              }
              content {
                json
              }
              featuredImage {
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
  

  const firstOnes = data.firstOne.items;
  const secondOnes = data.secondOne.items;
  const thirdOnes = data.thirdOne.items;

  return {
    props: {
      firstOnes,
      secondOnes,
      thirdOnes
    }
  }

}
