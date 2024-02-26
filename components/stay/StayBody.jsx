import RichText from '../RichText'

const StayBody = ({ project }) => {
  const { content } = project

  return (
    <div className='inside-lg content text-center ind-page flex-vertical'>
      <div>
        <RichText content={content} />
      </div>
    </div>
  )
}

export default StayBody