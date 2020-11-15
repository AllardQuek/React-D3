import React, { Component } from 'react';
import * as d3 from 'd3';

class Popularity extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    let accessToRef = d3.select(this.myRef.current);
    accessToRef.style("background-color", "navy")
  }

  render() {
    return <>
      <div ref={this.myRef}>Testing Ref</div>
    </>
  }
}

export default Popularity;


/*
import rd3 from 'react-d3-library';
import node from 'd3file';
const RD3Component = rd3.Component;

class Popularity extends RD3Component {

  constructor(props) {
    super(props);
    this.state = {d3: ''}
  }

  componentDidMount() {
    this.setState({d3: node});
  }

  render() {
    return (
      <div>
        <RD3Component data={this.state.d3} />
      </div>
    )
  }
};
export default Popularity;
*/