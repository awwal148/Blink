import Footer from './sections/Footer';
import Nav from'./components/Nav'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import { ShopContextProvider } from './Context/ShopContext';

const App = () => {
  return (
    <div>
      <ShopContextProvider>
      <Router>
        <Nav />
      <Main />
      <Footer />
      </Router>
      </ShopContextProvider>
    </div>
  );
};


export default App;
