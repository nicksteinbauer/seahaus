
import Link from 'next/link'
import ContentfulImage from '../ui/ContentfulImage'
import Arrow from "../../public/arrow.svg"

const ProjectHeader = ({ project }) => {
  const { title, featuredImage } = project

  return (
    <div className='pageHeader'>

      <div className='pageImage'>
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={featuredImage.url}
          width={featuredImage.width}
          height={featuredImage.height}
        />
      </div>

      <div className='titleExcerpt flex-sm justify'>
          <div>
            <h2 className=''>{title}</h2>
          </div>
          
          <div className='slideLinkContainer'>
            <Link href={`/projects`} aria-label={project.title} className='slideLink always-flex'>
              <span className='words'>All Projects</span>
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


    </div>
  )
}

export default ProjectHeader