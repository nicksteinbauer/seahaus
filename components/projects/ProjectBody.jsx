import RichText from '../RichText'

const ProjectBody = ({ project }) => {
  const { content } = project

  return (
    <div className=''>
      <RichText content={content} />
    </div>
  )
}

export default ProjectBody