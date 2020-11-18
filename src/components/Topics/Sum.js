import React, { Component } from 'react'

class Sum extends Component {
  constructor() {
    super()
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  handleChange1(val) {
    this.setState({ number1: val })
  }

  handleChange2(val) {
    this.setState({ number2: val })
  }

  getSum(number1, number2) {
    let newSum = parseInt(number1) + parseInt(number2)

    this.setState({ sum: newSum })
  }

  render() {
    return (
      <div className='puzzleBox sumPB'>
        <h4>Sum</h4>
        <input className='inputLine' onChange={(e) => this.handleChange1(e.target.value)} />
        <input className='inputLine' onChange={(e) => this.handleChange2(e.target.value)} />
        <button className='confirmationButton' onClick={(e) => this.getSum(this.state.number1, this.state.number2)}>Click</button>
        <span className='resultsBox'>Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum