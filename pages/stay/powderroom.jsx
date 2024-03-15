import Head from 'next/head'

import StayMain from '@/components/stay/StayMain';

const PowderRoom = ({ stickyStays, mainStays }) => {
  
  return (
    <main className='page all'>
    
      <Head>
        <title>Powder Room | SeaHaus Exuma Bahamas</title>
        <meta name="description" content="Indulge in luxury at your oasis on Three Sisters Beach in Exuma. This newly renovated organic modern beachfront home offers panoramic ocean views, a serene ambiance, and stylish design. From the spacious veranda to the custom ensuite featuring ocean views, every detail invites relaxation. Explore Bahamian moments captured in photography throughout the home, while practical amenities like a laundry room and additional fridge add convenience. Escape to this exquisite retreat and let the beauty of Exuma envelop you." />
      </Head>

      <StayMain stickyStays={stickyStays} mainStays={mainStays} />

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
          stickyStay:stayCollection(where: { category: "Powder Room", categorySticky:true }, limit: 1) {
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
          mainStay:stayCollection(where: { category: "Powder Room", sticky:false }, order: roomOrder_ASC) {
            items {
              title
              slug
              category
              roomOrder
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
export default PowderRoom