
import React, { Component } from 'react'

const subject=(STUDENT)=>{
    class Subject extends Component {
      render() {
        return (
          <div>
            <STUDENT hocsub="java"></STUDENT>
          </div>
        )
      }
    }
    return Subject
    
    
}
export default subject;