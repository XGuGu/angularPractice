Components: props, state & jsx
Created by inheriting from React.Component
  need to add React module to package.json
Props
  the data is passed down from the parent components,
  attributes from parent components, should not mutate

  if we dont have state, we dont need to declare an entire class,
  we call it a purely functional component
State
  mutable data that affect rendered output
  changes over time(usually due to user input)
  owned by the component
  set initial value in constructor


// a click counter
import React from 'react'

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
  }

  click(event) {
    event.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.click.bind(this)}> CLick me !! </button>
        <span>{this.state.count}</span> //the curely braces is for interpolation
      </div>
    )
  }
}

export default ClickCounter

Components: Render
1.  Describes at any moment in time what component should look like
2.  A function(in mathematical sense) of props and state
3.  Never explicitly called
4.  Changes to props or state induce a render
5.  this.setState({count: this.state.count+1}) causes render
6.  Uses JSX !
      conventional syntax for creating React elements
7.  must return a single React element
      single element can have any number of descendants
    this has a single root: the <div>


Components: Events
1.  Handler set by passing prop: onClick, onChange, onWhaterverTheEventNameIs
2.  Value is pointer to handler function
3.  Event handler function is passed event object, just like jQuery event
4.  Event object contains target, current target, time, mouse location, etc.
      almost always we will preventDefault()

Rendering Components in the Browser
1. Need to wait until DOM has loaded so we have a target to render into
2. ReactDOM.render will replace entire content of target HTML element



Transpilation
Browser cannot natively understand; must be transiled into raw JS

Babel /JSX Transpilation

React: Functional Components

// a click counter with reset button
import React from 'react'

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0, previousCounts: [] }
  }

  click(event) {
    event.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }

  reset(event) {
    event.preventDefault();
    const previousCounts = this.state.previousCounts;
    previousCounts.push(this.state.count);
    this.setState({ count: 0, previousCounts: previousCounts });
  }

  render() {
    return (
      <div>
        <button onClick={this.click.bind(this)}> CLick me !! </button>
        <span>{this.state.count}</span> //the curely braces is for interpolation
        <button onClick={this.reset.bind(this)}> Reset! </button>
        <ul>
          {
            this.state.previousCounts.map(count => <li>{count}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default ClickCounter;


// or write a counts component !!!
<Counts previousCounts={this.state.previousCounts} />

const Counts = (props) => (
  <ul>
    {
      props.previousCounts.map((count, idx) => <li key={idx}>{count}</li>)
    }
  </ul>
)

export default Counts; //this is a purely functional component
