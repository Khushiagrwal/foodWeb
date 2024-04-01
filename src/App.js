import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import {Navbar} from './Navbar'
import {About} from './pages/About'
import { Footer } from './Footer';

function App() {
  return (
      <Router>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/foodWeb" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>  
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
        <Footer/>
        
      </Router> 
  );
}

export default App;