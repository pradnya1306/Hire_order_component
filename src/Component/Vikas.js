import React, { Component } from 'react'
import subject from './HOC'

 class Vikas extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    vikasChange=()=>{
        this.setState({count:this.state.count+1})
    }

  render() {
    return (
      <div onMouseOver={this.vikasChange}>Vikas  {this.state.count} {this.props.hocsub}</div>
    )
  }
}
export default subject(Vikas)