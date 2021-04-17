import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Budget1', 'Budget2', 'Budget3',
           'Budget4', 'Budget5', 'Budget6'],
  datasets: [
    {
      label: 'Budget Average',
      backgroundColor: 'rgb(63, 81, 181)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 100]
    }
  ]
}

export default function CurrentChart() {
  return (
    <div id='currentBudgetInfos'>
      <Bar
        data={state}
        width={600}
        height={400}
        options={{
          title:{
            display:true,
            text:'Budget Average per month',
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
