import contact_card from './contact-card.webp';

function Contact (){
    return (
        <>
            <h1>Contact Us!</h1>
            <img className="contact_card" src={contact_card} alt='info@chaigptrobotics.org'></img>
            <iframe 
                src="https://hcb.hackclub.com/donations/start/chaigptrobotics" 
                width="800" 
                height="600" 
                title="Embedded Webpage"
            />
        </>
    );
}

export default Contact;