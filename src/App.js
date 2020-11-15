// import logo from './logo.svg';
// import Popularity from './Popularity';
import './App.css';
import * as d3 from 'd3';
import pop from './data/popularity.csv'
import React from 'react';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';


function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    d3.csv(pop, function(d) {
      setData(d);
      setLoading(false);
    });
    return () => undefined;
  }, []);
  console.log(data);
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      style={{tickLabels: {fontSize: 120}}}
      width='2060'
      height='1500'
      domainPadding={50}
      padding={{ top: 10, bottom: 40, left: 250, right: 10 }}
    >
    
    <VictoryBar horizontal
      data={data} 
      style={{ data: { fill: "#c43a31" } }} 
      
      x="Category" 
      y="Popularity" 
    />
  </VictoryChart>
  );
}

export default App;

