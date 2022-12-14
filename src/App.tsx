import { RouterProvider } from 'react-router-dom'
import AuthContextProvider, { useAuthContext } from './contexts/AuthContext'
import { privateRouter, publicRouter } from './pages/router'

function App() {
  const { isLoggedIn } = useAuthContext();
  console.log('isLoggedIn', isLoggedIn);

  return (
    <>
      <RouterProvider router={isLoggedIn ? privateRouter : publicRouter} />
    </>
  )
}

export default App
