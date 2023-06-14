import RichText from '../RichText'





const ContactPageCard = ({ contact }) => {

  
        return (
            <div className='contact'>

               <RichText content={contact.content} />
                
            </div>
        )
}

export default ContactPageCard