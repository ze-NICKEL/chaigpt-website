import './Team.js';

function Card (props) {

    return (
        <div className='card'>
            <img className='card_img' src={props.src} alt={props.name}></img>
            <h2 className='card_header'>{props.name}</h2>
            <p className='card-description'>{props.desc}</p>
        </div>
    );
}


export default Card;