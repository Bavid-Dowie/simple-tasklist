import React, { Component } from 'react';

class ToDoList extends Component {
  componentDidUpdate(){
    this.props.inputElement.current.focus();
  }

  render() {
    return (
      <div id='main-list'>
        <form onSubmit={this.props.addItem}>
          <input
            placeholder='what to do...'
            ref={this.props.inputElement}
            value={this.props.currentItem.text}
            onChange={this.props.handleInput}
          />
          <button type='submit'>Add Task</button>
        </form>
      </div>
    )
  }
}

export default ToDoList;