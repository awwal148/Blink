import Footer from './sections/Footer';
import Nav from'./components/Nav'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
      <Main />
      <Footer />
      </Router>
    </div>
  );
};


export default App;
