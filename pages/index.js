import Head from 'next/head'

import { Inter } from 'next/font/google'

//import Script from 'next/script'

import AboutCard from '@/components/abouts/AboutCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ abouts }) {
  
  return (
    <>
      <Head>
        <title>SeaHaus Exuma Bahamas | Newly Renovated Luxury Beachfront Home</title>
        <meta name="description" content="Escape to a beachfront haven on the tranquil shores of Three Sisters Beach in Exuma. Immerse yourself in natural beauty and modern luxury, from expansive ocean views to ocean-facing soaking tubs. With coastal charm and contemporary comfort, unwind and surrender to the allure of Exuma's pristine beaches." />ma
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
      <main className='home all'>
        <div className='video-contain inside-xxl'>
          <video autoPlay='autoplay' muted loop='loop' playsInline='playsinline' id='bgvid'>
            <source src={require('../public/SeaHausFadeToTan.mp4')} type='video/mp4' />
          </video>
        </div>
        <section className='about inside-md text-center'>
          {abouts.map((about) => (
            <AboutCard key={about.slug} about={about} />
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
          
          aboutCollection( where: { category: "Home" }, limit: 1) {
            items {
              slug
              title
              excerpt {
                json
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
  
  const abouts = data.aboutCollection.items;

  return {
    props: {
      abouts,
    }
  }

}
