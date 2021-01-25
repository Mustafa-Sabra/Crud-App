import React, {Component} from "react";
import Course from "./components/Course/Course";
import Form from "./components/AddForm/form";

class App extends Component {
state ={
  courses:[],
  content: "",
}



//deleteCourse
deleteCourse=(index)=>{
let {courses} = this.state;
courses.splice(index, 1);
this.setState({
  courses,
});
}

//updateCourse
updateCourse= (index, value)=>{
   let {courses} = this.state;
   let targetCourse =  courses[index];
   targetCourse["name"]= value;
   this.setState({
     courses
   })
}

//addCourse
addCourse = (e)=>{
  this.setState({
    content:e.target.value,
  })
}
//formSubmit
formSubmit=(e)=>{
  e.preventDefault();
  let {courses}= this.state;
  let {content} = this.state;
  if(content === ""){
    return false
  } else{
    courses.push({name:content,});
    this.setState({
      courses,
      content: "",
    });
  }
  
}

  render(){
    let {courses} = this.state;
    let arrayOfCouses = courses.length? courses.map((value, index)=>{
      return (
         <Course updateCourse={this.updateCourse} deleteCourse={this.deleteCourse} course={value}  key={index} index={index}/>
      )
   }) : <p>There are no courses to show</p>
    return (
      <div className="App">
        <h2>Add Courses</h2>
        <Form content={this.state.content} addCourse={this.addCourse} formSubmit={this.formSubmit}/>
        <ul>
           {arrayOfCouses}
        </ul>
      </div>
    );
  }
  
}

export default App;
