import React, { Component } from 'react'
import './Item.css';
import axios from 'axios';
import Card from './Card';

export default class Item extends Component {
  constructor(props) {
    super(props)

    this.state = { value: null };

  }

  componentWillMount() {
    this.initialize();
  }


  initialize() {
    if (this.props.value !== undefined) {
      this.setState({ value: this.props.value });
      return;
    }

    this.interval = setTimeout(() => this.loadData(), this.props.reloadTime * 100);
    this.loadData();
  }

  destroy() {
    if (!this.interval) {
      return;
    }
    clearInterval(this.interval);
    this.interval = null;
  }

  async loadData() {
    const response = await axios.get(this.props.url, { crossdomain: false });
    this.setState({ value: response.data.item[0].value });
  }

  componentWillUnmount() {
    this.destroy();
  }

  render() {
    const { title } = this.props;
    const { value } = this.state;

    return (
      <div className="Item">
        <Card title={title}>
          <div className="value">{value}</div>
        </Card>
      </div>
    )
  }
}
