import Link from 'next/link'
import RichText from '../RichText'


const AboutPageCard = ({ about }) => {

  
        return (
            <div className='flex-md justify'>
                
               
                <div className='titleExcerpt fifty flex-vertical'>
                    <div>
                        
                        <div className='aboutLinkContainer clearfix'>
                            <div>
                                <h1 className=''>{about.title}</h1>
                                <RichText content={about.excerpt} />
                            </div>
                            <Link href="/projects" aria-label={about.title} className='slideLink always-flex'>
                                <span className='words'>View Projects</span>
                            </Link>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
        )
}

export default AboutPageCard