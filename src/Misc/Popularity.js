// import React from 'react';
// import node from './diagram';
// import rd3 from 'react-d3-library';
// const RD3Component = rd3.Component;

// module.exports = React.createClass({

//   getInitialState: function() {
//     return {d3: ''}
//   },

//   componentDidMount: function() {
//     this.setState({d3: node});
//   },

//   render: function() {
//     return (
//       <div>
//         <RD3Component data={this.state.d3} />
//       </div>
//     )
//   }
// });

import React, { Component } from 'react';
import * as d3 from 'd3';
import pop from './data/popularity.csv'


class Popularity extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    
    const {data, w, h, colour} = this.props;


    let accessToRef = d3.select(this.myRef.current)
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "#cccccc")
      .style("padding", 10)
      .style("margin-left", 50);

      accessToRef.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i  * 70)
        .attr("y", (d, i) => h - 10 * d)
        .attr("width", 40)
        .attr("height", (d, i) => d * 10)
        .attr("fill", colour);
        // .attr("fill", (d, i) => d > 35 ? "tomato" : "yellow");

  }

  render() {
    return <>
      <div ref={this.myRef}> Label </div>
    </>
  }
}

export default Popularity;