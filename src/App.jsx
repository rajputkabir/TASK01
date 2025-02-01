import React from "react";
//import Login from "./components/Login";
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom"; 
import Home from "./components/Home";
import Register from "./components/register";
import Registersub from "./components/Registersub";
import Email from "./components/email";
import Logiin from "./components/Logiin";
import Vector from "./components/Vector";
import Setupf from "./components/Setupf";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    {/* <Route path='/login' element={<Login/>} /> */}
<Route path='/register' element={<Register/>}/>
<Route path='/registersub' element={<Registersub></Registersub>}/>
<Route path='/email' element={<Email></Email>}/>
<Route path='/logiin' element={<Logiin></Logiin>}/>
<Route path='/vector' element={<Vector></Vector>}/>
<Route path='/setupf' element={<Setupf></Setupf>}/>
    </Routes>
    </BrowserRouter>
{/* <div> */}
  {/* <RouterProvider router={router}/> */}
{/* </div> */}
    
    </>
  );
}


export default App;
