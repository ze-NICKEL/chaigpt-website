import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Team from './Team';
function Routing (){


    return (
        <div>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/*' element={<Home />}/>
            <Route path="/team" element={<Team/>}/>
        </Routes>
        </div>
    );
}

export default Routing;