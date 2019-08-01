import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Home extends Component {

  // constructor(props) {
  //
  // }

  render() {
    return (
      <div className="home">
        { this.props.children }
        <p>some infor in home</p>
      </div>
    )
  }
}

// ReactDOM.render(<Home/>, document.getElementById('app'));
