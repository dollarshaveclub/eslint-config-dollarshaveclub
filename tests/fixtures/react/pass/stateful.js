
import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    rendered: false,
  }

  onClick = (e) => {
    e.preventDefault()
  }

  render () {
    return (
      <a className='hi' href='#' onClick={this.onClick}>CLICK ME</a>
    )
  }
}
