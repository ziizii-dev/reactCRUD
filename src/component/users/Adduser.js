import { React, useState } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
const Adduser = () => {
  const navigate = useNavigate();
  const [name, nameChange] = useState("");
  //const [username,usernameChange]=useState('');
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [address, addressChange] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    //console.log({name,username,email,phone})
    const userData = { name, email, phone, address };
    fetch("http://127.0.0.1:8000/api/userList", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData)
    })
      .then((res) => {
        console.log(res);
        alert("Save Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add User</h2>
        <form onSubmit={handlesubmit}>
          <div className="w-75 mx-auto shadow p-5">
            <div className="form-group mb-2">
              <input
                type={"text"}
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => nameChange(e.target.value)}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type={"text"}
                className="form-control form-control-lg"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => emailChange(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type={"number"}
                className="form-control form-control-lg"
                placeholder="Enter Your Phone"
                name="phone"
                value={phone}
                onChange={(e) => phoneChange(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type={"text"}
                className="form-control form-control-lg"
                placeholder="Enter Your Address"
                name="address"
                value={address}
                onChange={(e) => addressChange(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary btn-block form-control form-control-lg"
              type="submit"
              onClick={(e) => this.submitInfo(e)}
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Adduser;
