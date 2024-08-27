import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import "./Assets/css/font.css"
import "./Assets/css/var.css"
import Header from './componenets/Header';
import Home from './componenets/Home';
import Work from './componenets/Work';
import Photography from './componenets/Photography';
import About from './componenets/About';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/work' element={<Work/>}></Route>
        <Route path='/photography' element={<Photography/>}></Route>
        <Route path='/about'element={<About/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
