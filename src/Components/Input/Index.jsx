import React, {useState} from "react";


function Input(props){
  return(
        
    <form>
    <div className="mb-3">
      <label htmlFor="search" className="form-label">
        Search:
      </label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Enter Postcode"
        id="search"
      />
      <br />
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-primary"
      >
        Search
      </button>
    </div>
  </form>
  
  )
}   
    

export default Input;
