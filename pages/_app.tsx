import { Toaster } from 'react-hot-toast'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import {UserContext} from "../lib/context.js";

function MyApp({ Component, pageProps }) {
    return (
      <>
        <UserContext.Provider value={{user:{}, username:"AbrarFahim"}}>
          <Navbar/>
          <Component {...pageProps} />
          <Toaster position='top-right'/>
        </UserContext.Provider>
      </>
    )
}

export default MyApp
