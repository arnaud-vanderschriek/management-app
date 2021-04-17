import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Project1', 'Project2', 'Project3',
           'Project4', 'Project5', 'Project6'],
  datasets: [
    {
      label: 'Project Average',
      backgroundColor: 'rgb(63, 81, 181)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [20, 59, 80, 81, 56, 100]
    }
  ]
}

export default function ActualChart() {
  return (
    <div id='chartInfos'>
      <Bar
        data={state}
        width={600}
        height={400}
        options={{
          title:{
            display:true,
            text:'Project Average per month',
            fontSize:10,
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  );
}
