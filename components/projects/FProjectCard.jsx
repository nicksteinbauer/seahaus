import Link from 'next/link'

import ContentfulImage from '../ui/ContentfulImage'
import ContentfulImageGsap from '../ui/ContentfulImageGsap'
import Arrow from "../../public/arrow.svg"

const FProjectCard = ({ fproject }) => {

  
  return (
    <li className='indList'>
      
        <div className='indImage'>
          <ContentfulImageGsap
            alt={`Cover Image for ${fproject.title}`}
            src={fproject.featuredImage.url}
            width={fproject.featuredImage.width}
            height={fproject.featuredImage.height}
            className='hideThis'
          />
        </div>
         
          <div className='excerpt always-flex justify'>
            <h3 className='flex-vertical'><span>{fproject.title}</span></h3>
            <div className='slideLinkContainer'>
              <Link href={`/projects/${fproject.slug}`} aria-label={fproject.title} className='slideLink always-flex'>
                <span className='words'>View</span>
                <span className='arrow flex-vertical'>
                  <ContentfulImage
                      alt='Arrow'
                      src={Arrow}
                      width='30'
                      height='100'
                  />
                </span>
              </Link>
            </div>
          </div>
      
    </li>
  )
}

export default FProjectCard