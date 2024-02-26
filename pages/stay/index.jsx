import Head from 'next/head'
//import { client } from '@/lib/contentful/client'
import StayCard from '@/components/stay/StayCard'
import StayPageCard from '@/components/stay/StayPageCard'


const Stay = ({ stickyStays, mainStays }) => {
  return (
    <main className='page all'>
    
      <Head>
        <title>SeaHaus Exuma Bahamas | Stay Here</title>
        <meta name="description" content="Generated by create next app" />
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
          mainStay:stayCollection(where: { featured:true, sticky:false }) {
            items {
              title
              slug
              category
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