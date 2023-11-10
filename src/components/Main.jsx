import Home from '../pages/Home';
import About from '../pages/About';
import Men from '../pages/Men';
import Women from '../pages/Women';
import Notfound from '../pages/Notfound';
import Nike  from '../pages/Nike'
import Adidas from '../pages/Adidas'
import Balanciaga from '../pages/Balanciaga'
import Jordan from '../pages/Jordan'
import Puma from '../pages/Puma'
import AllShoes from '../pages/AllShoes';
import NewBalance from '../pages/NewBalance'



import { Routes, Route } from 'react-router-dom';

const Main = () => (
  <main className="relative">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/men" element={< Men />} > 
         <Route  path="AllShoes" element={<AllShoes/>}/> 
         <Route  path="nike" element={<Nike />}/> 
         <Route  path="Adidas" element={<Adidas />}/> 
          <Route  path="jordan" element={<Jordan />}/>
         <Route  path="puma" element={<Puma />}/>
         <Route  path="balanciaga" element={<Balanciaga />}/>
         <Route  path="newbalance" element={<NewBalance />}/>
       </Route>
      <Route path="/women" element={< Women />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </main>
);

export default Main;
 