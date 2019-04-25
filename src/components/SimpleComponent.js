// Code SimpleComponent Here
import React, { Component } from "react";

class SimpleComponent extends Component {
     this.state{
       mood: 'happy'
     }


  render() {
    return({
      <div>
      {this.state}
      </div>

    })
  }


export default SimpleComponent
