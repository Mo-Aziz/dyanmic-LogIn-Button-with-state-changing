import React, { Component } from "react";
import "./styles.css";


class App extends Component{
constructor(){
super ()
this.state={
isLoggedIN: false}
this.handleClick=this.handleClick.bind(this)
}
handleClick (){
this.setState(prevState => {
return{ isLoggedIN: !prevState.isLoggedIN}
})
}
render(){
  let buttonText =this.state.isLoggedIN ? "LOG OUT" : "LOG IN"
  let displayText = this.state.isLoggedIN ? "Logged in" : "Logged out"
return(
<div>
<button onClick={this.handleClick}>{buttonText} </button>
<h1>{displayText}</h1>
  </div>
)
}
}

export default App