import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Profile</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {props.users
          .filter(user => 
             (user.firstName.toLowerCase().includes(props.search.toLowerCase())))
          .map(user => (
            <tr>
              <td><img src={user.picture} alt={user.firstName} /></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default SearchResults;