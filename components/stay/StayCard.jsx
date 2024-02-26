import Link from 'next/link'

//import ContentfulImage from '../ui/ContentfulImage'
import ContentfulImageGsap from '../ui/ContentfulImageGsap'
//import Arrow from "../../public/arrow.svg"

const StayCard = ({ stay }) => {

  let stayLink;

  if (stay.category == "Great Room & Kitchen") {
    stayLink = "greatroom";
  } else if (stay.category == "Primary Suite") {
    stayLink = "primarysuite";
  } else if (stay.category == "Primary Bath") {
    stayLink = "primarybath";
  } else if (stay.category == "Guest Bedroom") {
    stayLink = "guestbedroom";
  } else if (stay.category == "Bunk Room") {
    stayLink = "bunkroom";
  } else if (stay.category == "Dual Access Ensuite") {
    stayLink = "dualaccessensuite";
  } else if (stay.category == "Powder Room") {
    stayLink = "powderroom";
  } else if (stay.category == "Beachfront Veranda") {
    stayLink = "beachfronveranda";
  } else if (stay.category == "Beach") {
    stayLink = "beach";
  } else {
    stayLink = ""
  }
  
  return (
    <li className='indList'>
      <Link href={`/stay/${stayLink}`} aria-label={stay.title} className='slideLink'>
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