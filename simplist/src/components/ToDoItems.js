import React, { Component } from 'react'

class ToDoItems extends Component {
  createTasks = (item) => {
    return <li
      key={item.key}
      onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
  }
  render() {
    const toDoEntries = this.props.entries;
    const listItems = toDoEntries.map(this.createTasks);
    return (
    <ul className='the-list'>{listItems}</ul>
    )
  }
}

export default ToDoItems
