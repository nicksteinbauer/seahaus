//import Link from 'next/link'
import RichText from '../RichText'

import ContentfulImage from '../ui/ContentfulImage'


const ExperienceCard = ({ firstOne }) => {
    return (
        <>
            <div className='pageHeader'>
                {firstOne.featuredImage && (
                <div className='pageImage inside-xxl'>
                    <ContentfulImage
                        alt={`Cover Image for ${firstOne.title}`}
                        src={firstOne.featuredImage.url}
                        width={firstOne.featuredImage.width}
                        height={firstOne.featuredImage.height}
                    />
                </div>
                 )}
                <div className='mainTitle'>
                    <div className='inside-xxl text-center'>
                        <h1 className=''>{firstOne.title}</h1>
                    </div>
                </div>
            </div>
            {firstOne.content && (
            <div className='inside-lg text-center'>
                <div className='content'>
                    <RichText content={firstOne.content} />
                </div>
            </div>
            )}
            {firstOne.excerpt && (
            <div className='inside-sm text-center whiteBack'>
                <div className='content'>
                    <RichText content={firstOne.excerpt} />
                </div>
            </div>
            )}

        </>
    )
}

export default ExperienceCard