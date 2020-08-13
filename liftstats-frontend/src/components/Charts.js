import React, { Component } from 'react'
import { LineChart, Line } from 'recharts';


export default class Charts extends Component {
   

    render() {
        
        const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 350, pv: 2300, amt: 2400} ];
        
        const renderLineChart = (
          <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        );

        return(
            <div>
               {renderLineChart}
            </div>
        )
    }
}