import Link from 'next/link'

import ContentfulImage from '../ui/ContentfulImage'

const ProjectCard = ({ project }) => {

  
  return (
    <li className=''>
      <Link href={`/projects/${project.slug}`} aria-label={project.title} className='flex-sm musicLink'>
        <div className='musicImage'>
          <ContentfulImage
            alt={`Cover Image for ${project.title}`}
            src={project.featuredImage.url}
            width={project.featuredImage.width}
            height={project.featuredImage.height}
          />
        </div>
        <div className='always-flex musicContent'>
         
          <div className='excerpt flex-vertical'>
            <div>
              <h3 className=''>{project.title}</h3>

            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default ProjectCard