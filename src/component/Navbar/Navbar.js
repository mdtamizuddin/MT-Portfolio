import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../Firebase/firebase.init'
import { signOut } from 'firebase/auth'
import Loading from '../Loading/Loading'
const Navbar = () => {
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  if (loading) {
    return <Loading />
  }
  return (
    <div className='container mx-auto'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>About</Link></li>
              <li><Link to='/'>Service</Link></li>
              <li><Link to='/portfolio'>Portfolio</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to={'/'} className="btn btn-ghost normal-case text-2xl">MD TAMIZ</Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item" />
            </div>
          </button>

          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-14 border rounded-full">
                <img src={user ? user.photoURL : "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png"} alt='' />
              </div>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to='/' className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to={'/a'}>Settings</Link></li>
              {
                user ?
                  <>
                    <li><Link to={'/dashboard'}>Dahboard</Link></li>
                    <li><button className='btn-error text-white font-bold' onClick={() => {
                      signOut(auth)
                      navigate('/')
                    }}>Logout</button></li>

                  </>
                  :
                  <li><Link to={'/Login'}>Login </Link></li>}
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar