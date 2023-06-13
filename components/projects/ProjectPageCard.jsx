
import ContentfulImage from '../ui/ContentfulImage'

import RichText from '../RichText'

const ProjectPageCard = ({ project }) => {

  return (
    <>
    <div className='pageHeader'>

        <div className='pageImage'>
          <ContentfulImage
            alt={`Cover Image for ${project.title}`}
            src={project.featuredImage.url}
            width={project.featuredImage.width}
            height={project.featuredImage.height}
          />
        </div>

        <div className='excerpt'>
          <div className='inside-xxl'>
            <h1 className=''>{project.title}</h1>
          </div>
        </div>
    </div>

    <div className='content inside-lg text-center'>
      <RichText content={project.content} />
    </div>
        
    </>
  )
}

export default ProjectPageCard