import React, { Component } from 'react';
import "./Form.css"

export default class Form extends Component {
  constructor(props){
    super(props);
    this.inpone=React.createRef()
    this.inpone=React.createRef()
  }

  // handleKey = (e) => { /// when click n change
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  Submit = (e) => {
    e.preventDefault();
    // console.log("fname",fname);
    
    console.log(this.inpone.value);
    console.log(this.inptwo.value);
  }

  render() {
    return (
      <div className='Full-data'>
        <h1>Registration Form</h1>
        <form action="" onSubmit={this.Submit}>
          <input type="text"  name="fname" ref={input=>this.inpone=input} id= "" placeholder="First Name" />
          <input type="text"  name="lname" ref={input=>this.inptwo=input} id= "" placeholder="Last Name" />
         
          <button id="btn">Submit</button>
        </form>
      </div>
    )
  }
}
