
import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pagenotfound from "./Pages/Pagenotfound";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Donars from "./Pages/Users/Donars";
import PrivateRoute from "./Components/Layout/Routes/Private";
import Dashboard from "./Pages/Users/Dashboard";
import UserDonar from "./Pages/Users/UserDonar";
import Search from "./Pages/Users/Search";


function App() {
  return (
   <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='/donars' element={<PrivateRoute/>} >
      <Route path='' element={<Donars/>} />
      </Route>
      <Route path='/dashboard' element={<PrivateRoute/>}>
      <Route path='' element={<Dashboard/>} />
      </Route>
      <Route path='/user-donar/:id' element={<PrivateRoute/>}>
      <Route path='' element={<UserDonar/>} />
      </Route>
      <Route path='/register' element={<Register/>} />
      <Route path='/signin' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/*' element={<Pagenotfound/>} />
     </Routes>
   </>
  )
}

export default App;
