import React, {Component, Fragment} from "react";
import "./Course.css"

class Course extends Component{
state ={
    edit:false,
}

//randerNewName
randerNewName=(e)=>{
e.preventDefault();
this.props.updateCourse(this.props.index, this.input.value);
this.toggleCourse();
}

//toggleCourse
toggleCourse=()=>{
   let {edit} = this.state;
   this.setState({
       edit:!edit,
   })
}

//showCourse
showCourse=()=>{
    let {course, index} = this.props;
    return(
        <li className="li">
            <span>{course.name}</span>
            <button className="edit-button" onClick={()=>{this.toggleCourse()}}>Edit course</button>
            <button className="delete-button" onClick={()=>{this.props.deleteCourse(index)}}>Delete course</button>
        </li>
       
    )
}

//editCourseForm
editCourseForm=()=>{
    return(
        <form className="form" onSubmit= {this.randerNewName}>
            <input type="text" ref={(v)=>{this.input = v}} defaultValue={this.props.course.name}></input>
            <button type="submit" value="">Add course</button>
        </form>
       
    )
}
render(){
    return(
        <Fragment>
            {this.state.edit? this.editCourseForm():this.showCourse()}
        </Fragment>
       
    )
}



}
export default Course;