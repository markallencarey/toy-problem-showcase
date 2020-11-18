import React, { Component } from 'react'

class Palindrome extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }

  isPalindrome(userInput) {
    let trueFalse = this.state.palindrome
    let j = userInput.length - 1
    for (let i = 0; i < j; i++) {
      console.log(i + '-------' + j)
      console.log(userInput[i] + '-------' + userInput[j])
      if (userInput[i] === userInput[j]) {
        console.log("it's match")
        trueFalse = 'true'
      } else {
        console.log("no match")
        trueFalse = 'false'
        break
      }
      j--
    }
    this.setState({palindrome: trueFalse})

  }


  render() {
    return (
      <div className='puzzleBox palindromePB'>
        <h4>Palindrome</h4>
        <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
        <button className='confirmationButton' onClick={(e) => this.isPalindrome(this.state.userInput)}>Check if your word is a palindrome!</button>
        <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}


export default Palindrome