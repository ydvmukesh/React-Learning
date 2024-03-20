import './App.css'
import Login from './componets/Login'
import Profile from './componets/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
 <UserContextProvider>
 <h1>Context Leacture</h1>
 <Login/>
 <Profile/>
 </UserContextProvider>
  )
}

export default App
