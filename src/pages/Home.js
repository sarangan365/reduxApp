import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addUser } from "../store/actions/user";
import './Home.css'; // Import the CSS file
const Home = () => {
   const [user, setUser] = useState({
      name: "",
      email: "",
      contact: "",
      address: ""
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setUser((prev) => {
         return {
            ...prev,
            [name]: value
         }
      })
   }
   const dispatch = useDispatch();

   const handleAdd = (e) => {
      e.preventDefault();
      dispatch(addUser(user));
      setUser({
         name: "",
         email: "",
         contact: "",
         address: ""
      })
   }

   return (
      <div className="home">
         <div className="card">
            <div className="titleContainer">
               <h1 className="card-title">Enter User Details</h1>
            </div>
            <form className='home_container'>
               <input placeholder='Name' value={user.name} name='name' onChange={handleChange}></input>
               <br />
               <br />
               <input placeholder='Email' value={user.email} name='email' onChange={handleChange}></input>
               <br />
               <br />
               <input placeholder='Contact' value={user.contact} name='contact' onChange={handleChange}></input>
               <br />
               <br />
               <textarea placeholder='Address' value={user.address} name='address' onChange={handleChange}></textarea>
               <br />
               <br />
               <button onClick={handleAdd}>Submit</button>
            </form>
         </div>
      </div>
   )
}

export default Home;
