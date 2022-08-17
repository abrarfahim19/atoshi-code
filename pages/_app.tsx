import { Toaster } from 'react-hot-toast'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import {UserContext} from "../lib/context.js";
import {useUserData} from "../lib/hooks";

function MyApp({ Component, pageProps }) {
  const userData = useUserData()
    return (
      <>
        <UserContext.Provider value={userData}>
          <Navbar/>
          <Component {...pageProps} />
          <Toaster position='top-right'/>
        </UserContext.Provider>
      </>
    )
}

export default MyApp
