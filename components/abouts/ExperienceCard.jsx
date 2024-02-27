//import Link from 'next/link'
import RichText from '../RichText'

import ContentfulImage from '../ui/ContentfulImage'


const ExperienceCard = ({ about }) => {
    return (
        <>
            <div className='pageHeader'>
                {about.image && (
                <div className='pageImage inside-xxl'>
                    <ContentfulImage
                        alt={`Cover Image for ${about.title}`}
                        src={about.image.url}
                        width={about.image.width}
                        height={about.image.height}
                    />
                </div>
                 )}
                <div className='mainTitle'>
                    <div className='inside-xxl text-center'>
                        <h1 className=''>{about.title}</h1>
                    </div>
                </div>
            </div>

            <div className='inside-lg text-center'>
                <div className='content'>
                    <RichText content={about.content} />
                </div>
            </div>

        </>
    )
}

export default ExperienceCard