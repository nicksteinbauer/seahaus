import Head from 'next/head'
//import { client } from '@/lib/contentful/client'
import StayCard from '@/components/stay/StayCard'
import StayPageCard from '@/components/stay/StayPageCard'


const Stay = ({ stickyStays, mainStays }) => {
  return (
    <main className='page all stay'>
    
      <Head>
        <title>Stay Here | SeaHaus Exuma Bahamas</title>
        <meta name="description" content="Indulge in luxury at your oasis on Three Sisters Beach in Exuma. This newly renovated organic modern beachfront home offers panoramic ocean views, a serene ambiance, and stylish design. From the spacious veranda to the custom ensuite featuring ocean views, every detail invites relaxation. Explore Bahamian moments captured in photography throughout the home, while practical amenities like a laundry room and additional fridge add convenience. Escape to this exquisite retreat and let the beauty of Exuma envelop you." />
      </Head>

      <section className='projects interior' id='projects'>
        <div className='theRest'>
          
          {stickyStays.map((stay) => (
              <StayPageCard key={stay.slug} stay={stay} />
          ))}

          
          <div className='projectMap inside-xxl'>
            <ul className='projectGrid auto-grid-sm agSlight'>
              {mainStays.map((stay) => (
                <StayCard key={stay.slug} stay={stay} />
              ))}
            </ul>
          </div>
        </div>
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
          stickyStay:stayCollection(where: { featured:false, sticky:true }, limit: 1) {
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
          mainStay:stayCollection(where: { featured:true, sticky:false }, order: stayOrder_ASC) {
            items {
              title
              slug
              category
              stayOrder
              imageThumb {
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
export default Stay