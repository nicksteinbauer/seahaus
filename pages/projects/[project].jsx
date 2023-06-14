import GalleryCardSlide from '@/components/projects/GalleryCardSlide'
import ProjectBody from '@/components/projects/ProjectBody'
import ProjectHeader from '@/components/projects/ProjectHeader'
import Skeleton from '@/components/ui/Skeleton'
import { useRouter } from 'next/router'

import Slider from 'react-slick'


export default function ProjectPage({ project, gallerys }) {
    const router = useRouter()

    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        varaibleWidth: true
    };
    
    return (
        <>
            {router.isFallback ? (
                <Skeleton />
            ) : (
                <>
                <ProjectHeader project={project} />
                <ProjectBody project={project} />
                <div className='inside-lg insideGallery'>
                    <Slider {...settings}>
                        {gallerys.map((gallery) => (
                            <GalleryCardSlide key={gallery.slug} gallery={gallery} />
                        ))}
                    </Slider>
                </div>
                </>
            )}
          </>
    )
}

export async function getStaticProps({ params }) {
    const { project } = params;
    const result = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`, {
        method: 'POST', 
        headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/JSON'
        },
        body: JSON.stringify({
        query: `
            query GetProject($slug: String!) {
                projectCollection(
                    where: {
                        slug: $slug
                    }, 
                    limit: 1
                ) {
                    items {
                        title
                        slug
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
                galleryCollection(
                    where: {
                      project: {
                        slug: $slug
                      }
                    }
                    order: slug_ASC
                  ) {
                    items {
                      title
                      slug
                      image {
                        url
                        width
                        height
                      }
                      project {
                        slug
                      }
                    }
                  }
            }
        `,
        variables: {
            slug: project
        }
        })
    });

    if(!result.ok) {
        console.error(result);
        return {};
    }

    const { data } = await result.json();

    const [projectData] = data.projectCollection.items;
    const gallerys = data.galleryCollection.items;
    

    return {
        props: { 
            project: projectData, 
            gallerys },
    }
}

export async function getStaticPaths() {

    const result = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`, {
        method: 'POST', 
        headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/JSON'
        },
        body: JSON.stringify({
        query: `
            query {
                projectCollection {
                    items {
                        slug
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
    const projectSlugs = data.projectCollection.items;

    const paths = projectSlugs.map(({slug}) => {
        return {
            params: { project: slug }
        };
    })

    return {
        paths,
        fallback: false,
    }
}