import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import "./Assets/css/font.css"
import "./Assets/css/var.css"
import Header from './componenets/Header';
// import Home from './componenets/Home';
import Work from './componenets/Work';
import WorkPage from './componenets/sub pages/WorkPage'
import Photography from './componenets/Photography';
import About from './componenets/About';
import Footer from './componenets/Footer';
import AlbumPage from './componenets/sub pages/AlbumPage';

function App() {

  
  return (
    <Router basename='/Sehej-portfolio'>
      <Header/>
        <Routes>
          {/* <Route path='/' element={<Home/>}></Route> */}
          <Route path='/' element={<Work/>}></Route>
          <Route path='/title' element={<WorkPage/>}></Route>
          <Route path='/album' element={<AlbumPage/>}></Route>
          <Route path='/photography' element={<Photography/>}></Route>
          <Route path='/about'element={<About/>}></Route>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;