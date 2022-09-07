
import React, { Component } from 'react'
import subject from './HOC'

 class Ajay extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    change=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        <h1 onMouseOver={this.change}>Ajay  {this.state.count}  {this.props.hocsub}</h1>

      </div>
    )
  }
}

export default subject(Ajay)