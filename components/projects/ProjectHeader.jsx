import ContentfulImage from '../ui/ContentfulImage'

const ProjectHeader = ({ project }) => {
  const { title, featuredImage } = project

  return (
    <>
      <h2>{title}</h2>
      
      <div className='imageContainer'>
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={featuredImage.url}
          width={featuredImage.width}
          height={featuredImage.height}
        />
      </div>
      
    </>
  )
}

export default ProjectHeader