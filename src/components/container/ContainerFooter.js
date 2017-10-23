import React, { Component } from 'react'

export default class ContainerFooter extends Component {
  render() {
    return (
      <div className='container-footer'>
        { this.props.footer }
      </div>
    )
  }
}
