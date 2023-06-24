import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formReducer } from "../store/formReducer";

const UserForm = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({type:'UPDATE_DATA', payload:{ [name]: value }});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <h1>FORM</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="age">
          age
          <input
            type="number"
            name="age"
            value={data.age}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={data.gender}
          onChange={handleInputChange}
        >
          <option value="none">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">other</option>
        </select>
        <button type="submit">submit</button>
      </form>
      <div>
        <h2>Data:</h2>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
        <p>Gender: {data.gender}</p>
      </div>
    </div>
  );
};

export default UserForm;
