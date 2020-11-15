// import logo from './logo.svg';
import './App.css';
import Popularity from './Popularity';
// import rd3 from 'react-d3-library'
import * as d3 from 'd3';
import pop from './data/popularity.csv'
import React, { Component } from 'react';


const data = [12, 36, 15, 35, 35, 10, 40];
const data1 = [5, 10, 15, 20, 25];
const data2 = [10, 9, 8, 7, 6];

const w = 500;
const h = 400;



function App() {
  
  

  return (
    <div className="App">
      <header className="App-header">
        <Popularity data={data} w={w} h={h} colour="green" />
        <Popularity data={data1} w={w} h={h} colour="orange" />
        <Popularity data={data2} w={w} h={h} colour="brown" />
      </header>
    </div>
  );
}

export default App;


// Import Learnseeker data
// Updates and Categories
// Label: category, X: Year, Y: Count of Last Updated

/*
function generate_year_range(start, end){
  var years = [];
  for(var year = start; year <= end; year++){
      years.push(year)
  }
  return years;
}

const categories = 
const years = generate_year_range(2013, 2018);
Count where same category and year 
const num_updates = 

category | 2013 | 2014 | ... | 2018 | growth

Family                                0.5
Action                                0.9
------------------------------------ 

OR



const popularity_growth = (curr - prev) / prev * 100
const cate

*/

