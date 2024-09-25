import {Routes, Route} from 'react-router-dom';
import Home from './Home';
function Routing (){


    return (
        <div>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/*' element={<Home />}/>
            <Route path="/test" element={<div>test</div>}/>
        </Routes>
        </div>
    );
}

export default Routing;