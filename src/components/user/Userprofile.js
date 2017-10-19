import React from "react"
import { Avatar, Icon, Dropdown, Menu } from "antd"
import "./userprofile.css"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"


class Userprofile extends React.Component {
  constructor(arg) {
    super(...arg)
    this.state = {
      opend: false
    }
  }

  componentDidMount(){
    console.log(this.refs.menu)
  }

  componentWillUpdate() {

  }

  transition(e){
    console.log(e)
  }

  toggle(){
    this.setState({
      opend: !this.state.opend
    })

    console.log(1)
  }

  render() {
    return (

      <div className="userprofile" onMouseEnter={this.toggle.bind(this)} onMouseLeave={this.toggle.bind(this)}>
        <Avatar icon="user" style={{ verticalAlign: 'middle' }} />
        <span className="user-name" style={{ padding: "1.5rem .6rem" }}>zhoul</span>
        <Icon type="down" />

        <ReactCSSTransitionGroup 
          transitionName="fade" 
          transitionEnterTimeout={300}
          transitionEnter={true}
          transitionLeave={true}
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionLeaveTimeout={300}>
          {
            this.state.opend &&
            <Menu className="menu" key={1}>
              <Menu.Item>
                <Icon type="setting" /> Setting
              </Menu.Item>
              <Menu.Item>
                <Icon type="user" /> Profile
              </Menu.Item>
              <Menu.Item>
                <Icon type="message" /> My Message
              </Menu.Item>
              <Menu.Item>
                <Icon type="lock" /> Lock Screen
              </Menu.Item>
              <Menu.Item>
                <Icon type="logout" /> Login Out
              </Menu.Item>
            </Menu>
          }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Userprofile