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

  render() {
    return (
      <div>
        <button> CLick me !! </button>
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
