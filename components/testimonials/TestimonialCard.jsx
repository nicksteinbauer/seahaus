
import RichText from "../RichText"
const TestimonialCard = ({ testimonial }) => {

  
  return (
    <>
         
        <div className='testimonialSlide inside-xl'>
          <div className="testimonialExcerpt">
            <RichText content={testimonial.content} />
          </div>
          <h3>{testimonial.title}</h3>
        </div>
        
      
    </>
  )
}

export default TestimonialCard