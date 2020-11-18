import React, { Component } from 'react'

class FilterString extends Component {
  constructor() {
    super()
    this.state = {
      names: ['Mark', 'Albus', 'Krissbeth', 'Scott', 'Brian', 'Susan', 'Joey'],
      userInput: '',
      filteredNames: []
    }
  }

  handleChange(val) {
    this.setState({userInput: val})
  }

  filterNames(userInput) {
    let names = this.state.names
    let newNameList = []

    for (let i = 0; i < names.length; i++) {
      // console.log('names[i]', names[i])
      if (names[i].includes(userInput)) {
      // console.log('FilterString -> filterNames -> userInput', userInput)
      console.log(`${names[i]} includes ${userInput}`)
        
        newNameList.push(names[i])
        console.log('FilterString -> filterNames -> newNameList', newNameList)
        
      }
    }

    this.setState({filteredNames: newNameList})
  }

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'>Names: {JSON.stringify(this.state.names, null, 10)}</span>
        <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
        <button className='confirmationButton' onClick={ () => this.filterNames(this.state.userInput)}>Filter</button>
        <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}</span>
      </div>
    )
  }
}

export default FilterString