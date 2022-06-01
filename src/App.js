
import './App.css';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Portfolio from './component/Portfolio/Portfolio';
import Navbar from './component/Navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import SwiperSlide from './component/Swiper/Swiper';
import Dahboard from './component/Dashboard/Dashboard'
import Login from './component/User/Login';
import Signup from './component/User/Signup';
function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/swiper' element={<SwiperSlide />} />
        <Route path='/dashboard' element={<Dahboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
