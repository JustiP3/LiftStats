import React, { Component } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


export default class Charts extends Component {
   

    render() {
        
        const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 350, pv: 2300, amt: 2400} ];
        
        const renderLineChart = (
            <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        );

        return(
            <div>
               {renderLineChart}
            </div>
        )
    }
}