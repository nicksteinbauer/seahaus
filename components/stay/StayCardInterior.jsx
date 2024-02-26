//import Link from 'next/link'

//import ContentfulImage from '../ui/ContentfulImage'
import ContentfulImageGsap from '../ui/ContentfulImageGsap'
//import Arrow from "../../public/arrow.svg"

const StayCardInterior = ({ stay }) => {

  
  return (
    <li className='indList'>
        <div className='indImage'>
        {stay.imageThumb && (
          <ContentfulImageGsap
            alt={`Cover Image for ${stay.title}`}
            src={stay.imageThumb.url}
            width={stay.imageThumb.width}
            height={stay.imageThumb.height}
            className='hideThis'
          />
        )}
        </div>
        {/* <div className='excerpt justify'>
            <h3><span>{stay.title}</span></h3>
        </div> */}
    </li>
  )
}

export default StayCardInterior