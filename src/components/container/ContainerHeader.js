import React, {Component} from 'react'


export default class ContainerHeader extends Component {
  constructor(props){
    super(...props)

    console.log(this.props)
  }

  render(){
    return (
      this.props.title ?
      <div className='container-header clearfix'>

        <h5 className='title'>{this.props.title}</h5>

        { this.props.subTitle ? <span className='sub-title'>{ this.props.subTitle }</span> : null}

        <div className='container-actions'>
          { this.props.actions }
        </div>
      </div> : null
    )
  }
}
