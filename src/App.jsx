import './App.css'
import './Loader.css'
import { Provider } from 'react-redux'
import store from "./store"
import Routes from './routes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import { TokenValidator } from './services/_utils'

function App() {
  const token = localStorage.getItem('token')

  // Call the API on component mount (similar to componentDidMount) and on every page reload
  useEffect(() => {
    if (token) {
      TokenValidator();
    }
  }, []);


  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition:Bounce
      />

    </>
  )
}

export default App
