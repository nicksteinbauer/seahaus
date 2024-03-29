import Head from 'next/head'

import { Inter } from 'next/font/google'

//import Script from 'next/script'

import ExperienceCard from '@/components/abouts/ExperienceCard'
import BookNew from '@/components/BookNew'

const inter = Inter({ subsets: ['latin'] })

export default function RatesBooking({ firstOnes, secondOnes }) {
  
  return (
    <>
      <Head>
        <title>SeaHaus Exuma Bahamas | Rates &amp; Booking</title>
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
          <div className='flex-md inside-lg ratesbooking'>
            <div className='whiteBack forty-five flex-vertical'>
              <div className='content'>
                
                  <p className="bigger"><strong>To find rates & availability, please access our <a href="https://www.vrbo.com/3431116?dateless=true" target="_blank">VRBO page here.</a> Preferably booked via this website, the home is listed on VRBO but fees apply for owner & renter. Click Book Now above to forgo fees.</strong></p>
                  <p>Nightly Rate $1100, 4 Night Minimum<br/> Cleaning fee $350 <br/>Bahamas VAT 10%</p>
                  <p></p>
                  <p>Payment via Credit Cards (Visa, Mastercard, Discover,Amex) Check or Venmo</p>
                  <p>Secure your reservation with 50% of rental rate and signed rental agreement</p>
                
              </div>
            </div>
            <div className='whiteBack forty-five flex-vertical'>
              <div className='content'>
                
                  <p>No Pets Allowed<br/>
                  No Smoking Allowed<br/>
                  Maximum overnight guest: 8<br/>
                  Minimum age to rent: 25 y/o
                  </p>
                  <p>If you are planning an event, such as a wedding, birthday or family gathering, owner must approve and agree to.</p>
                  <p>CANCELATION POLICY<br/>
                  100% refund of deposit if canceled 60 days prior to stay. 50% refund of deposit if canceled 30 days prior to stay.</p>
                  <p>Check in: 4pm<br/>
                  Check out: 11am
                  </p>
                  <p>Early Check-in at 1pm can be accommodated with a 2 week notice. Service fee is applied.</p>
              </div>
            </div>
          </div>
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
          
          firstOne: aboutCollection( where: { category: "Rates" }) {
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

  return {
    props: {
      firstOnes
    }
  }

}
