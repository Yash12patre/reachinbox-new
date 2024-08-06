import { useState } from 'react'
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import './App.css'
import Login from './Components/login';
import Sidebar from './Components/sidebar';
import MainRoutes from "./Components/mainRoutes"

function App() {
  const [count, setCount] = useState(0)
  const { isAuthenticated } = useAuth0();
  return (
   <>
      <div
      className="App ">
      {isAuthenticated ? (
        <div className="flex">
          <Sidebar />
          <MainRoutes />
        </div>
      ) : (
        <Login />
      )}
    </div>
   </>
  )
}

export default App
