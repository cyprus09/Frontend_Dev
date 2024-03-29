import React, { Component } from 'react'

class Counter extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement(){
        this.setState({
            count: this.state.count - 1
        },
            () => {
            console.log(this.state.count)
            }
        )
    }

  render() {
    return (
      <div>
        Count - {this.state.count} &nbsp;
        <button onClick={() => this.increment()}>Increment</button> &nbsp;
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    )
  }
}

export default Counter