import ContentfulImage from '../ui/ContentfulImage'

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

      <div className='excerpt'>
        <div className='inside-xxl'>
          <h1 className=''>{title}</h1>
        </div>
      </div>

    </div>
  )
}

export default ProjectHeader