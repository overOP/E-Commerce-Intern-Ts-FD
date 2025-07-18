import { Outlet } from 'react-router'
import NotiBar from './NotiBar'
import NavBar from './NavBar'
import Footer from './Footer'
import Newsletter from '../Components/Layout/Footer/Newsletter'

const Layout = () => {
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