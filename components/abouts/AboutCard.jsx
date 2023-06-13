import Link from 'next/link'
import RichText from '../RichText'

import ContentfulImageGsap from '../ui/ContentfulImageGsap'
import ContentfulImage from '../ui/ContentfulImage'
import Arrow from "../../public/arrow.svg"



const AboutCard = ({ about }) => {

  
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
                                <h2 className=''>{about.title}</h2>
                                <RichText content={about.excerpt} />
                            </div>
                            <Link href='/about' aria-label={about.title} className='slideLink always-flex'>
                                <span className='words'>Discover</span>
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
                        <ContentfulImageGsap
                            alt={`${about.image2.description}`}
                            src={about.image2.url}
                            width={about.image2.width}
                            height={about.image2.height}
                            className='image2 clear hideThis'
                        />
                    </div>
                </div>
                
                
            </div>
        )
}

export default AboutCard