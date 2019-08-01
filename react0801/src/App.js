import React from 'react';
import './App.css';
import Home from './Home';

function App() {
  render() {
    return (
      <div className="App">
        <Home children="wqweqwe"/>
      </div>
    );
  }
}
  // constructor() {
  //   super();
  //   this.state = {
  //     name: 'jerry'
  //   };
  // }

  // componentWillMount() {
  //   if (window.innerWidth < 500) {
  //     this.setState({innerWidth:window.innerWidth});
  //   }
  // }
  //
  // componentDidMount() {
  //   console.log('didmount')
  // }

export default App;
