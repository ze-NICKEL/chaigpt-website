import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Team from './Team';
import Contact from './Contact';
import About from './About';
function Routing (){


    return (
        <div>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/*' element={<Home />}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        </div>
    );
}

export default Routing;