
import './App.css';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Portfolio from './component/Portfolio/Portfolio';
import Navbar from './component/Navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';

import Dahboard from './component/Dashboard/Dashboard'
import Login from './component/User/Login';
import Signup from './component/User/Signup';
import Review from './component/Swiper/Review';
import AddPortfolio from './component/Dashboard/AddPortfolio';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './component/Firebase/firebase.init';
import NotFound from './component/NotFound/NotFound';
import User from './component/Dashboard/User';
import ManagePortfolio from './component/Dashboard/ManagePortfolio';
import AddReview from './component/Dashboard/AddReview';
import Messages from './component/Dashboard/Messages';

function App() {
  const [currentUser, setUser] = useState({ role: 'am-public' })
  const [user, loading] = useAuthState(auth)
  useEffect(() => {
    if (user) {
      fetch(`https://mt-portfolio2.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(json => {
          if (json.role) {
            setUser(json)
          }
        })
    }
  }, [user])
  if (loading) {
    return
  }
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/swiper' element={<Review />} />

        <Route path='/dashboard' element={<Dahboard />} >

          {
            currentUser?.role === "admin" &&
            <>
              <Route path='add-portfolio' element={<AddPortfolio />} />
              <Route path='all-users' element={<User />} />
              <Route path='mails' element={<Messages />} />
              <Route path='managePortfolio' element={<ManagePortfolio />} />
            </>
          }
          <Route path='add-review' element={<AddReview />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
