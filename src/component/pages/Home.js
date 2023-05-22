// import React from "react";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Home= ()=>{
    const [users,setUsers]=useState([]);
 useEffect(()=>{
 //console.log ("Hello");
 loadUser();
    },[]);
 
const loadUser = async ()=>{
  const result = await axios.get("http://127.0.0.1:8000/api/userList");
 //console.log(result,'asd');
setUsers(result.data.data);
    }

  const  deleteUser= async id=>{
    await axios.delete(`http://127.0.0.1:8000/api/userList/${id}`)
   // console.log(result);
      loadUser();
   }


 return(
    
<div className="container">
<span>
<h1 className="col-2">Home Page</h1>
<Link className="btn btn-light col-2 offset-10 mb-4" to ="/user/add">Add Users</Link>

</span>
    
    <table class="table">
  <thead>
    <tr className="bg-dark text-white">
      <th scope="col">Sl</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((item,index )=>(
            <tr >
            <th scope="row">{index+1} </th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.address}</td>
            <td>
                <Link  className="btn btn-success" to ={`/user/edit/${item.id}`}> Edit</Link>
                <Link  className="btn btn-danger"  onClick={()=>{deleteUser(item.id)}}> Delete</Link>
            
            </td>


        </tr>
        ))
    }    
  </tbody>
</table>
    
</div>
 );
};
export default Home;








