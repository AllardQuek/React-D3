// class BarChart extends Component {
    //     componentDidMount() {
    //         const data = [ 2, 4, 2, 6, 8 ]
    //         this.drawBarChart(data)
    //     }
    //     drawBarChart(data)  {}
    //     render() { return <div ref="canvas"></div> }
    // }

const data = {}

data.width = 500;
data.height = 750;
data.dataset = [
    {xValue : 1, yValue: 40},
    {xValue : 2, yValue: 63}, 
    {xValue : 3, yValue: 52}, 
    {xValue : 4, yValue: 59}, 
    {xValue : 5, yValue: 79},
    ]


// Display names to run along x and y axis
data.x_display_name = 'X VALUE';
data.y_display_name = 'Y VALUE';

data.dataset = [
    {label: apples, value: 25},
    {label: oranges, value: 30},
    {label: surfboards, value: 150},
    ]

data.margins = {top: 20, right: 10, bottom: 0, left: 10}


data.yAxisLabel = 'Y VALUE';

// data.fill = ['lemonChiffon']
data.fill['lemonChiffon', 'aliceblue', 'sandybrown', 'darksalmon']

data.ticks = 10;

data.barClass = 'barChart';

var node = document.createElement('div');
    