import React, {Component} from 'react'


export default class ContainerContent extends Component{

  constructor(props){
    super(...props)
  }

  render(){
    return (
      <div className='container-body'>
        { this.props.children }
      </div>
    )
  }
}