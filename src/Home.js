import './Team.css';
import team_pic from './team_picture.webp';
import logo from './chaigpt_logo.webp';

function Home (){
    
    return (
        <div id="banner">
            <img className="team_photo" src={team_pic} alt='Depicts all the members of Chai GPT'></img>
            <img className='logo' src= {logo} alt="Chai GPT's team logo, depicting a cup of tea with the team name around it."></img>
            <h1 className='title'>ChaiGPT Robotics</h1>
        </div>
    );
}

export default Home;