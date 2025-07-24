import { RouterProvider } from 'react-router'
import { router } from './Routes/Route'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router = {router} />
    </>
  )
}

export default App