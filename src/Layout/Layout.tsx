import { Outlet, useLocation } from 'react-router'
import NotiBar from './NotiBar'
import NavBar from './NavBar'
import Footer from './Footer'
import Newsletter from '../Components/Layout/Footer/Newsletter'
import { useEffect } from 'react'

const Layout = () => {

  const location = useLocation();
  
  console.log(location.pathname);


  useEffect(()=> {
    const timeout =  setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }, 10);

      return () => {
        clearTimeout(timeout);
      }
    
  },[location.pathname])
  
  return (
    <>
    <header>
        <NotiBar/>
        <NavBar/>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <Newsletter/>
        <Footer/>
    </footer>
    </>
  )
}

export default Layout