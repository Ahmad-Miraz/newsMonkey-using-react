import React, { Component } from 'react'
import loader from './Solid snake.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <img src={loader} alt="loader" />
      </div>
    )
  }
}
