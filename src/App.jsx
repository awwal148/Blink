import Footer from './sections/Footer';
import Nav from'./components/Nav'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import { ShopContextProvider } from './Context/ShopContext';
import { ShopWomenContextProvider } from './Context/WomenShopContext';

const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <ShopWomenContextProvider>
      <Router>
        <Nav />
      <Main />
      <Footer />
      </Router>
      </ShopWomenContextProvider>
      </ShopContextProvider>
    </div>
  );
};


export default App;
