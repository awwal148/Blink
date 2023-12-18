import Footer from './sections/Footer';
import Nav from'./components/Nav'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import { ShopContextProvider } from './Context/ShopContext';
import { ShopWomenContextProvider } from './Context/WomenShopContext';
import { FilterProvider, WomenFilterProvider } from './components/ContextApi';

const App = () => {
  return (
    <div>
      <WomenFilterProvider>
      <FilterProvider>
      <ShopContextProvider>
        <ShopWomenContextProvider>
      <Router>
        <Nav />
      <Main />
      <Footer />
      </Router>
      </ShopWomenContextProvider>
      </ShopContextProvider>
      </FilterProvider>
      </WomenFilterProvider>
    </div>
  );
};


export default App;
