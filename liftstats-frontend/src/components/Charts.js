import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';



export default class Charts extends PureComponent {
   

    render() {
       
        const data = this.props.allSets 
        
        const renderLineChart = (
            <BarChart width={600} height={300} data={data}>
            <Bar dataKey="weight" fill="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <XAxis dataKey="created_at" />
            <YAxis />
          </BarChart>
        );

        return(
            <div>
               {renderLineChart}               
               <p>{this.props.allSets[0].weight}</p>
             
            </div>
        )
    }
}