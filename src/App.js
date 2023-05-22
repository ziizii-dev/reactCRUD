import "../node_modules/bootstrap/dist/css/bootstrap.css"

import './App.css';
import Dashboard from "./component/pages/Dashboard";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navbar from "./component/layout/Navbar";
import Adduser from "./component/users/Adduser";
import Edituser from "./component/users/Edituser";


import PageNotFound from "./component/pages/PageNotFound";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";



function App() {


  return (
    <div className="">
    <Router>
    <div className="" >
    <Navbar></Navbar>
    
      <Routes >
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/user/add" element={<Adduser/>}/>
      <Route exact path="/user/edit/:id" element={<Edituser/>}/>
  
      {/* <Route exact path="/sidebar" element={<Sidebar/>}/> */}
     <Route exact path="*" element={<PageNotFound/>}/>
       

     
      </Routes>
   
    

    </div>
    </Router>
    </div>
  );
}

export default App;
