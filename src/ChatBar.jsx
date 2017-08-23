import React, { Component } from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      value: '',
      messages: this.props.messages
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);

    this.addMessage = this.addMessage.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  onChange(event) {

      console.log(event.target.value);
        this.setState({
          value: event.target.value
        });

    }
    onChangeUser(event) {
        console.log(event.target.value);
          this.setState({
            user: event.target.value
          });

      }
  addMessage(event) {

    if(event.key ==='Enter'){
      this.setState({
        value: ''
      })
      console.log(this.state.value)
      this.props.addMessage(this.state.value);
    }
  }

  changeUser(event) {
    if(event.key ==='Enter'){
      var oldUser = this.props.currentUser;
      console.log(this.state.user)
      this.props.changeUser({
        oldUser: oldUser,
        newUser: this.state.user});
    }
  }

  render() {
    return (

          <footer className="chatbar">
              <input className="chatbar-username" placeholder={this.props.currentUser} onChange={this.onChangeUser} onKeyPress={this.changeUser} />
              <input className="chatbar-message" placeholder="Type a message and hit ENTER" value={this.state.value} onChange={this.onChange} onKeyPress={this.addMessage}/>
          </footer>

      );
   }
}
ChatBar.propTypes = {
  currentUser: React.PropTypes.string,
  messages: React.PropTypes.array,
  user: React.PropTypes.string
};
export default ChatBar;
