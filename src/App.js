import React, { Component } from 'react';
import List from './List';
import GroceryForm from './GroceryForm';

class App extends Component {

  state = {
    groceries: [
      { id: 1, name: 'Milk', complete: true, },
    ]
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (name) => {
    const grocery = { id: this.getId(), name, complete: false, };
    this.setState({ groceries: [grocery, ...this.state.groceries] });
  }

  handleClick = (id) => {
    this.setState({
      groceries: this.state.groceries.map( grocery => {
        if (grocery.id === id) {
          return { ...grocery, complete: !grocery.complete, }
        }
        return grocery;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <GroceryForm addItemFunction={this.addItem} />
        <List name="Grocery List" items={this.state.groceries} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
