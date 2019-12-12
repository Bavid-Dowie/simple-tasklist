import React, { Component } from 'react';
import Title from './components/Title';
import ToDoList from './components/ToDoList';
import ToDoItems from './components/ToDoItems';
import './styles/style.css';

class App extends Component {
  inputElement = React.createRef()
  // constructor() {
  //   super()
  //   this.state = {
  //     name: 'Your',
  //     items: [],
  //     currentItem: {
  //       text: '',
  //       key: ''
  //     }
  //   }
  // }
  state = {
    name: 'Excellent',
    items: [],
    currentItem: {
      text: '',
      key: '',
    }
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  componentDidMount() {
    if (this.state.name === '') {
      this.setState({
        name: 'Your'
      })
    }
  }
  handleInput = (e) => {
    console.log(e);
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem,
    })
  }
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      console.log(this);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Title name={this.state.name} />
        <ToDoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <ToDoItems
          entries={this.state.items}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  };
}

export default App;
