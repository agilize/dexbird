import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import Item from './components/Item';
import boards from './config/boards';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    };

    this.boards = boards;

    setInterval(() => this.setState({ time: new Date() }), 1000);
  }

  renderColumn(items, group_id) {
    return (
      <div key={group_id} className="col">
        {items.map((props, key) => <Item key={`${group_id}-${key}`} {...props} />)}
      </div>
    )
  }

  render() {
    return (
      <div className="App">

        <div className="cards">
          <div className="row">
            {this.boards.map(this.renderColumn.bind(this))}
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <Clock className="clock" time={this.state.time} />
            <div className="title">
              Dev Board
          </div>
          </div>
        </footer>
      </div >
    );
  }
}

export default App;
