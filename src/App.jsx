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
// import Additem from './componenets/sub pages/Additem';
// import Deleteitem from './componenets/sub pages/Deleteitem';
// import Admin from './componenets/Admin';

function App() {  
  return (
    <Router basename='/Sehej-portfolio'>
      <Header/>
        <Routes>
          {/* <Route path='/' element={<Home/>}></Route> */}
          <Route path='/' element={<Work/>}></Route>
          <Route path='/work/:id' element={<WorkPage/>}></Route>  
            {/* <Route path=':id' element={<AlbumPage/>}></Route> */}
          <Route path='/photography' element={<Photography/>}></Route>
          <Route path='/photography/:path' element={<AlbumPage/>}></Route>
          <Route path='/about'element={<About/>}></Route>
          {/* <Route path='/admin' element={<Admin/>}>
            <Route path='add' element={<Additem/>}/>
            <Route path='delete' element={<Deleteitem/>}/>
          </Route> */}
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;