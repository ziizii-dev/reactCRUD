import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
const Edituser = () => {
  let navigate = useNavigate();
  const{id} = useParams();
  const [user,setUser] =useState({
    name:"",
    email:"",
    phone:"",
    address:""
  });
  const{name,email,phone,address} = user;
  const onInputChange = e =>{
        setUser({...user,[e.target.name]: e.target.value});
  };

  useEffect(()=>{
    loadUser();
  },[]);
  const onSubmit = async (e)=>{
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/api/userList/${id}`,user);
    navigate("/");
  }
  const loadUser =async (e)=>{
    const result = await axios.get(`http://127.0.0.1:8000/api/userlist/details/${id}`)
    //console.log(result);
    setUser(result.data.data);
  }
  
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit = {e =>onSubmit(e)}>
          <div className="w-75 mx-auto shadow p-5">

            <div className="form-group mb-2">
              <input
                type={"text"}
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type={"text"}
                className="form-control form-control-lg"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type={"number"}
                className="form-control form-control-lg"
                placeholder="Enter Your Phone"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type={"text"}
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button
              className="btn btn-primary btn-block form-control form-control-lg"
              type="submit"
              onClick={(e) => this.submitInfo(e)}
            >
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Edituser;
