//import Link from 'next/link'
import RichText from '../RichText'

import HamNew from '@/components/HamNew'



const AboutCard = ({ about }) => {

  
        return (
            <>
                
                    
                <div className='mainContent flex-vertical'>
                   
                    <div>
                        <h1 className=''>{about.title}</h1>
                        <div className='content'>
                            <RichText content={about.excerpt} />
                        </div>
                        <HamNew />
                    </div>
                   
                </div>
                
                
            </>
        )
}

export default AboutCard