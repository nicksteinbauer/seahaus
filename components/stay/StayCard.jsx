import Link from 'next/link'

//import ContentfulImage from '../ui/ContentfulImage'
import ContentfulImageGsap from '../ui/ContentfulImageGsap'
//import Arrow from "../../public/arrow.svg"

const StayCard = ({ stay }) => {

  
  return (
    <li className='indList'>
      <Link href={`/stay/${stay.slug}`} aria-label={stay.title} className='slideLink'>
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
        <div className='excerpt justify'>
            <h3><span>{stay.category}</span></h3>
        </div>
      </Link>
    </li>
  )
}

export default StayCard