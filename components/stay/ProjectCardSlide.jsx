import Link from 'next/link'
import ContentfulImage from '../ui/ContentfulImage'
import Arrow from "../../public/arrow.svg"

const ProjectCardSlide = ({ project }) => {

  
  return (
    <>
     
        <div className='projectImage'>
          <ContentfulImage
            alt={`Cover Image for ${project.title}`}
            src={project.featuredImage.url}
            width={project.featuredImage.width}
            height={project.featuredImage.height}
          />
        </div>
        
         
        <div className='titleExcerpt flex-sm justify'>
          <div>
            <h2 className=''>{project.title}</h2>
            <p>{project.excerpt}</p>
          </div>
          
          <div className='slideLinkContainer'>
            <Link href={`/projects/${project.slug}`} aria-label={project.title} className='slideLink always-flex'>
              <span className='words'>Discover</span>
              <span className='arrow flex-vertical'>
                <ContentfulImage
                    alt='Arrow'
                    src={Arrow}
                    width='30'
                    height='100'
                />
              </span>
            </Link>
          </div>
          
        </div>
       
      
    </>
  )
}

export default ProjectCardSlide