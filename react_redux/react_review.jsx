// how to start a react project ?
create-react-app
npm start

configure the index.js

import react from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return <div> hello world </div>;
}

ReactDom.render(<App />, document.querySelector("#root"));

//Inline styling with JSX
  HTML:
    <div style="background-color: red;"></div>
    <div style="background-color: red; color: white;"></div>
    <div style="border: 1px solid red;"></div>
  JSX:
    <div style={{ backgroundColor: 'red' }}></div>
    <div style={{ backgroundColor: 'red', color: 'white' }}></div>
    <div style={{ border: '1px solid red' }}></div>
      //single qoute or double qoutes are both fine

// class vs className
    we use className to aviod colision with class
    like class App extends React.Component {}....


//functional Component vs Class Component ?
  class component :
   1. easier code orgnization.
   2. can use 'state'.
   3. easier to handle user input
   4. understands lifecycle events
   5. easier to do things when app first starts

  functional component :
   good for simple content

// state
   only useable in class component;
   updating state causes the component (almost) instant rerender;
   State must be initialized when a component is created;
   State can only be update by setState

// Controlled vs Uncontrolled elements, why we perfer Controlled elements
   the key difference is we are saving our information in our components on our state property rather than in the DOM

//handling requests
    example :
    //npm install --save axios
    import axios from 'axios';

    onSearchSubmit(term) {
      axios.get('_url', {
        params: {query: term},
        headers: {
          .....
        }
      }).then(response => {
        this.setState({res: response});
      })
    }

//React refs
  Gives access to a single DOM
  We create refs in constructor, assign them to instance variable, then pass to a particular JSX element as props

  constructor(props) {
    super(props);

    this.imgRef = React.createRef();
  }

  render() {
    return(
      <img ref={this.imgRef} .... />
    )
  }

// redux, react-redux
  import { createStore, combineReducers, applyMiddleware } from 'redux';
  import { Provider } from 'react-redux';

  ReactDom.render(
    <Provider store={createStore(RootReducers)}>
      <App />
    </Provider>,
    document.querySelector('#root');
  );

  import { connect } from 'react-redux';

//redux-thunk
  middleware in redux :
  function that gets call with every action we dispatch.
  Has the ability to STOP, MODIFY, or otherwise mess around with actions.
  For dealing with async actions

//how to use react to do the single page application ?
  1. in Root component, import { HashRouter } from 'react-router-dom';
  2. wrap your app component with the <HashRouter></HashRouter>
  3. Also use <Switch> to wrap all the <Route>
  4. in Component, we no longer use <a> for redirection, we can use { Link } from 'react-router-dom'
