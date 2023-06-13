import Link from 'next/link'
import RichText from '../RichText'

import ContentfulImageGsap from '../ui/ContentfulImageGsap'
import ContentfulImage from '../ui/ContentfulImage'
import Arrow from "../../public/arrow.svg"



const AboutPageCard = ({ about }) => {

  
        return (
            <div className='flex-md justify'>
                
                <div className='leftImages fifty'>
                    <ContentfulImageGsap
                    alt={`${about.image1.description}`}
                    src={about.image1.url}
                    width={about.image1.width}
                    height={about.image1.height}
                    className='floatRight image1 hideThis'
                    />
                    <ContentfulImageGsap
                    alt={`${about.image3.description}`}
                    src={about.image3.url}
                    width={about.image3.width}
                    height={about.image3.height}
                    className='floatRight image3 hideThis'
                    />
                </div>
                
                    
                <div className='titleExcerpt fifty flex-vertical'>
                    <div>
                        
                        <div className='aboutLinkContainer clearfix'>
                            <div>
                                <h1 className=''>{about.title}</h1>
                                <RichText content={about.content} />
                            </div>
                            <Link href="/projects" aria-label={about.title} className='slideLink always-flex'>
                                <span className='words'>View Projects</span>
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
                </div>
                
                
            </div>
        )
}

export default AboutPageCard