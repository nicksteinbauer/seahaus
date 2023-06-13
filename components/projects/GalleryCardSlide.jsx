
import ContentfulImage from '../ui/ContentfulImage'


const GalleryCardSlide = ({ gallery }) => {

  
  return (
    <>
     
        <div className='galleryImage'>
          <ContentfulImage
            alt={gallery.title}
            src={gallery.image.url}
            width={gallery.image.width}
            height={gallery.image.height}
          />
        </div>
        
         
        <div className='titleExcerpt flex-sm justify'>
          <div>
            <h3 className=''>{gallery.title}</h3>
          </div>
          
        </div>
       
      
    </>
  )
}

export default GalleryCardSlide