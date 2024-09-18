// packages and tools
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import './App.css';

// routes
import {Home} from './routesElements/homePage.js';
import {About} from './routesElements/aboutPage.js';
import {Contact} from './routesElements/contactPage.js';

// components
import {Header} from './components/header';
import {Footer} from './components/footer';

// ------------------------------------------------------------------------ //

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
