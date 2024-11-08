import './App.css';
import team_pic from './team_picture.webp';
import logo from './chaigpt_logo.webp';

function Home (){
    
    return (
        <>
        <div id="banner">
            <img className="team_photo" src={team_pic} alt='Depicts all the members of Chai GPT'></img>
            <img className='logo' src= {logo} alt="Chai GPT's team logo, depicting a cup of tea with the team name around it."></img>
            <h1 className='title'>ChaiGPT Robotics</h1>
        </div>
        <h3 id="home-blurb">We are ChaiGPT Robotics, a team operating in the First Tech Challenge (FTC). We design, build, and operate robots in order to achieve a set of tasks that changes every year. Through the FTC program, we connect with our communities and strive to make changes in them. We become better builders, programmers, engineers, and people.</h3>
        <iframe title="Chai GPT Robotics Instagram Feed" scrolling="no" id="insta-feed"src="https://www.instagram.com/chaigpt_robotics/embed/" frameborder="0"/>
        </>
    );
}

export default Home;