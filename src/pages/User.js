import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../store/actions/user';
import './User.css'; // Import the CSS file

const User = () => {
   const users = useSelector((state) => {
      return state.data.users;
   });

   const dispatch = useDispatch();

   return (
      <table className="user-table">
         <thead>
            <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Contact</th>
               <th>Address</th>
               <th>Action</th>
            </tr>
         </thead>
         <tbody>
            {users.map((user, index) => (
               <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td>{user.address}</td>
                  <td>
                     <button onClick={() => dispatch(deleteUser(index))}>Delete</button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default User;
