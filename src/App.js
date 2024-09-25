import './chaigpt_logo.webp';
import './App.css';
import Routing from './Routing';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div>
      <div className='nav'>
        <Link className="link_styles" to={"/team"}>The Team</Link>
        <Link className="link_styles" to={"/about"}>About Us</Link>
        <Link className="link_styles" to={"/resources"}>Resources</Link>
      </div>
      <Routing></Routing>
    </div>
  );
}

export default App;
