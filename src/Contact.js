import contact_card from './contact-card.webp';

function Contact (){
    return (
        <>
            <h1>Contact Us!</h1>
            <img className="contact_card" src={contact_card} alt='info@chaigptrobotics.org'></img>
        </>
    );
}

export default Contact;