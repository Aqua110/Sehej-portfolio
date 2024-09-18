import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './Assets/css/font.css';
import './Assets/css/var.css';
import './Assets/css/Admin.css';
import Work from './componenets/Work';
import WorkPage from './componenets/sub pages/WorkPage';
import Photography from './componenets/Photography';
import About from './componenets/About';
import AlbumPage from './componenets/sub pages/AlbumPage';
import Addimg from './componenets/sub pages/Addimg';
import Addalbum from './componenets/sub pages/Addalbum';
import Addwork from './componenets/sub pages/Addwork';
import Deletework from './componenets/sub pages/Deletework';
import Deletealbum from './componenets/sub pages/Deletealbum';
import Deleteimg from './componenets/sub pages/Deleteimg';
import Login from './componenets/Login';
import NotFound from './componenets/404 not found';
import { useEffect, useState } from 'react';
import Albumimage from './componenets/sub pages/Albumimage';
import Header from './componenets/Header'; // Import header for the logout button
import Footer from './componenets/Footer';

const App = () => {
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || 'user');
  const [updateKey, setUpdateKey] = useState(0); // Key to trigger re-render
  const [basename, setBasename] = useState(userRole === 'admin' ? '/admin' : '');

  useEffect(() => {
    const storedUserRole = localStorage.getItem('userRole');
    if (storedUserRole) {
      setBasename(''); // Change basename to an empty string
      setUserRole(storedUserRole);
    }
  }, [updateKey]); // Depend on `updateKey`

  const handleLogout = () => {
    localStorage.removeItem('userRole'); // Remove the userRole from localStorage
    setUserRole('user'); // Reset user role to user
    setUpdateKey(prevKey => prevKey + 1); // Trigger re-render by changing key
    
  };

  if (userRole === 'admin') {
    return (
      <>
        <Router>
        <Header userRole={userRole}/>
          <Routes>
            <Route path="/admin" element={<Deletework />} />
            <Route path="/admin/photography" element={<Deletealbum />} />
            <Route path="/admin/photography/:path" element={<Deleteimg />} />
            <Route path="/admin/addimg" element={<Addimg />} />
            <Route path="/admin/addalbum" element={<Addalbum />} />
            <Route path="/admin/addwork" element={<Addwork />} />
            <Route path="/admin/updatework/:id" element={<Addwork />} />
            <Route path="/admin/updatealbum/:id" element={<Addalbum />} />
            <Route path="/admin/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer handleLogout={handleLogout}/>
        </Router>
      </>
    );
  } else {
    return (
      <>
       <Router>
        <Header userRole={userRole}/>
          <Routes>
            <Route path="/" element={<Work />} />
            <Route path="/work/:title" element={<WorkPage />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/photography/:path" element={<AlbumPage />} />
            <Route path="/photography/:path/image/:id" element={<Albumimage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login setUserRole={setUserRole} setBasename={setBasename} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
        </Router>
      </>
    );
  }
};

export default App;
