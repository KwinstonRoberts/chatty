

import React, { Component } from 'react';

import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages,
    };
  }
  render() {
    return (
      <main className="messages">
        <Message messages={this.props.messages}/>
        <div className="message system">{this.props.notification}</div>
      </main>
      );
  }
}
MessageList.propTypes = {
  messages: React.PropTypes.array,
  color:React.PropTypes.string
};
export default MessageList;
