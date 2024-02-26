
import ContentfulImage from '../ui/ContentfulImage'

import RichText from '../RichText'

const StayPageCard = ({ stay }) => {

  return (
    <>
      <div className='pageHeader'>
          <div className='pageImage inside-xxl'>
            <ContentfulImage
              alt={`Cover Image for ${stay.title}`}
              src={stay.image.url}
              width={stay.image.width}
              height={stay.image.height}
            />
          </div>
          <div className='mainTitle'>
            <div className='inside-xxl text-center'>
              <h1 className=''>{stay.title}</h1>
            </div>
          </div>
      </div>
      <div className='inside-lg text-center'>
        <div className='content'>
          <RichText content={stay.content} />
        </div>
      </div>
    </>
  )
}

export default StayPageCard