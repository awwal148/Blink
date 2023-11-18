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

//Women
import WomenAllShoes from '../pages/womenAllShoes';
import WomenPuma from '../pages/WomanPuma'
import WomenNike from '../pages/WomenNike'
import WomenAdidas from '../pages/WomenAdidas'
import WomenBalanciaga from '../pages/WomanBalanciaga'
import WomenJordan from '../pages/WomanJordan'
import WomenNB from '../pages/WomanNB'


import { Routes, Route } from 'react-router-dom';
import Contact from '../pages/Contact';

const Main = () => (
  <main className="relative">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={< Men />} > 
         <Route  path="AllShoes" element={<AllShoes/>}/> 
         <Route  path="nike" element={<Nike />}/> 
         <Route  path="Adidas" element={<Adidas />}/> 
          <Route  path="jordan" element={<Jordan />}/>
         <Route  path="puma" element={<Puma />}/>
         <Route  path="balanciaga" element={<Balanciaga />}/>
         <Route  path="newbalance" element={<NewBalance />}/>
       </Route>
      <Route path="/women" element={< Women />} >
        <Route path="AllShoes" element={<WomenAllShoes />} />
         <Route  path="nike" element={<WomenNike />}/> 
         <Route  path="Adidas" element={<WomenAdidas />}/> 
          <Route  path="jordan" element={<WomenJordan />}/>
         <Route  path="puma" element={<WomenPuma />}/>
         <Route  path="balanciaga" element={<WomenBalanciaga />}/>
         <Route  path="newbalance" element={<WomenNB />}/>
      </Route>
      <Route path="/about-us" element={<About />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </main>
);

export default Main;
 