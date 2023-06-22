import Head from 'next/head'

import { Inter } from 'next/font/google'



import AboutCard from '@/components/abouts/AboutCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ abouts }) {
  
  return (
    <>
      <Head>
        <title>SeaHaus Exuma Bahamas - Coming Soon!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main className='home'>
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
          
          aboutCollection {
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
