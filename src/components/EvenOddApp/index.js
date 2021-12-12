// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {text: 0, reference: 'Even'}

  Increment = () => {
    this.setState(() => {
      const number = parseInt(Math.random() * 100)
      if (number % 2 === 0) {
        return {text: number, reference: 'Even'}
      }
      return {text: number, reference: 'Odd'}
    })
  }

  render() {
    const {text, reference} = this.state
    return (
      <div className="container">
        <div className="inner">
          <h1 className="main-heading">Count {text}</h1>
          <p className="para">Count is {reference}</p>
          <button type="button" className="btn" onClick={this.Increment}>
            Increment
          </button>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
