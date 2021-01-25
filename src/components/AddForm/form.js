import React from "react";
import "./form.css"

let Form =(props)=> {
    return (
      <form className="Form" onSubmit={props.formSubmit}>
          <input onChange={props.addCourse}  value={props.content} placeholder="Enter Your Course..."></input>
          <input type="submit" value="Add Course"></input>
      </form>
    );
  }

export default Form;