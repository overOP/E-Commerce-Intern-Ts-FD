import { Outlet } from 'react-router'
import NotiBar from './NotiBar'
import NavBar from './NavBar'
import Footer from './Footer'

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
        <Footer/>
    </footer>
    </>
  )
}

export default Layout