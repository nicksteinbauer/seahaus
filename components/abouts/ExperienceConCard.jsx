//import Link from 'next/link'
import RichText from '../RichText'

import ContentfulImage from '../ui/ContentfulImage'


const ExperienceConCard = ({ thirdOne }) => {
    return (
        <div className='each'>
            <div className='pageHeader concierge'>
                {thirdOne.featuredImage && (
                <div className='pageImage inside-xxl'>
                    <ContentfulImage
                        alt={`Cover Image for ${thirdOne.title}`}
                        src={thirdOne.featuredImage.url}
                        width={thirdOne.featuredImage.width}
                        height={thirdOne.featuredImage.height}
                    />
                </div>
                 )}
                <div className='mainTitle'>
                    <div className='inside-xxl text-center'>
                        <h2 className=''>{thirdOne.title}</h2>
                    </div>
                </div>
            </div>
            {thirdOne.content && (
            <div className='inside-lg text-center'>
                <div className='content'>
                    <RichText content={thirdOne.content} />
                </div>
            </div>
            )}
            {thirdOne.excerpt && (
            <div className='inside-xxs text-center whiteBack'>
                <div className='content'>
                    <RichText content={thirdOne.excerpt} />
                </div>
            </div>
            )}

        </div>
    )
}

export default ExperienceConCard