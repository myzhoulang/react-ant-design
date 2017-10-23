import React, {Component} from 'react'


export default class ContainerHeader extends Component {
  constructor(props){
    super(...props)

    console.log(this.props)
  }

  render(){
    return (
      <div className='container-header'>
        <h5 className='title'>{this.props.title}</h5>
        <div className='pull-right'>
          { this.props.actions }
        </div>
      </div>
    )
  }
}