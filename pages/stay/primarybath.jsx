import Head from 'next/head'

import StayMain from '@/components/stay/StayMain';

const PrimaryBath = ({ stickyStays, mainStays }) => {
  
  return (
    <main className='page all'>
    
      <Head>
        <title>SeaHaus Exuma Bahamas | Primary Bath</title>
        <meta name="description" content="Generated by create next app" />
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
          stickyStay:stayCollection(where: { category: "Primary Bath", categorySticky:true  }, limit: 1) {
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
          mainStay:stayCollection(where: { category: "Primary Bath", sticky:false, categorySticky:false }) {
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
export default PrimaryBath