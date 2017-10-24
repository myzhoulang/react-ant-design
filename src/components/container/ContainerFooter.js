import React, { Component } from 'react'

export default class ContainerFooter extends Component {
  constructor(props){
    super(...props)
  }
  render() {
    return (
      this.props.footer ?
      <div className='container-footer'>
        { this.props.footer }
      </div> : null
    )
  }
}
