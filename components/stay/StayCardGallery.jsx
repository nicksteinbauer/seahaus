//import Link from 'next/link'

//import ContentfulImage from '../ui/ContentfulImage'
import ContentfulImageGsap from '../ui/ContentfulImageGsap'
//import Arrow from "../../public/arrow.svg"

const StayCardGallery = ({ stay }) => {

  
  return (
    // <li className='indList'>
    //   <div className='indImage'>
      <>
        {stay.imageThumb && (
          <a href={stay.image.url}>
          <ContentfulImageGsap
            alt={`Cover Image for ${stay.title}`}
            src={stay.imageThumb.url}
            width={stay.imageThumb.width}
            height={stay.imageThumb.height}
            className='hideThis'
          />
          </a>
        )}
      </>
    //   </div>
    // </li>  
  )
}

export default StayCardGallery