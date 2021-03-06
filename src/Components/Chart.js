import React from 'react'
import { Line } from 'react-chartjs-2';
import { prepareData } from '../utils/prepareDataForChart';
import { getRandomColor } from '../utils/randomColor';

export function Chart({ items }) {
    const copyItems = [...items]
    const dataForChart = prepareData(copyItems);

    const data = {
        labels: dataForChart.labels,
        datasets: dataForChart.data.map((elem, i) => ({
            label: elem.filter(item => item.name)[0]?.name || null,
            data: elem.map(item => item.price),
            backgroundColor: `${getRandomColor()}`,
            borderColor: `${getRandomColor()}`,
            yAxisID: `y-axis-${i}`,
            fill: true,
            spanGaps: true,
        }))
    }

    const options = {
        scales: {
            yAxes: dataForChart.data.map((elem, i) => ({
                type: 'linear',
                display: true,
                position: 'left',
                id: `y-axis-${i}`,
            }))
        }
    }

    return (
        <div>
            <Line height={400} width={600} data={data} options={options}/>
        </div>
    )
}
