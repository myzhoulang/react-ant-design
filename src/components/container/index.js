import React, { Component } from 'react'
import ContainerHeader from './ContainerHeader'
import ContainerFooter from './ContainerFooter'
import './Container.css'

export default class ContainerContent extends Component {
  render() {
    return (
      <div className='container'>
        <ContainerHeader { ...this.props } />

        <div className='container-body'>
          {this.props.children}
        </div>

        <ContainerFooter { ...this.props } />
      </div>
    )
  }
}

