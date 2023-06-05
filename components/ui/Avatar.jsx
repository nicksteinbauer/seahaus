import ContentfulImage from './ContentfulImage'

const Avatar = ({ name, picture }) => {
  return (
    <div className='avatar'>
      <div className='relative'>
        <ContentfulImage
          src={picture.fields.file.url}
          layout='fill'
          className='rounded-full m-0'
          alt={name}
        />
      </div>
      <div className='font-semibold'>{name}</div>
    </div>
  )
}

export default Avatar