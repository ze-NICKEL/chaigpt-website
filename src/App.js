import logo from './chaigpt_logo.webp';
import './App.css';
import Routing from './Routing';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div>
      <div className='nav'>
        <Link className="link_styles" to={"/team"}>The Team</Link>
        <Link className="link_styles special_link" to={"/about"}>About Us</Link>
        <Link to={"/home"}>
        <img src={logo} className='nav-logo' alt='ChaiGPT logo'/>
        </Link>
        <Link className="link_styles" to={"/resources"}>Resources</Link>
        <Link className='link_styles' to={"/contact"}>Contact</Link>
      </div>
      <Routing></Routing>
    </div>
  );
}

export default App;
