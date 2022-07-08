import React from 'react';
import MOCK_DATA from '../utils/MOCK_DATA.json'
import mockdata_Winc from '../utils/mockdata_Winc.json'
// import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const array1 = JSON.parse(MOCK_DATA)
const array2 = JSON.parse(mockdata_Winc)
const array3 = [{ ...array1, array2 }];

console.log(array3);

function BarChart() {
    const data = [
        { exercise: 1, score: 1 },
        { exercise: 2, score: 2 },
        { exercise: 3, score: 3 },
        { exercise: 4, score: 4 },
        { exercise: 4, score: 5 },
        { exercise: 2, score: 4 },
    ];

    return (
        <div>
            <p>hello barchart</p>

            <VictoryChart
                // domainPadding will add space to each side of VictoryBar to
                // prevent it from overlapping the axis
                domainPadding={20}
            >
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Exercise A", "Exercise B", "Exercise C", "Exercise D"]}
                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => (x)}
                />
                <VictoryBar
                    data={data}
                    x="exercise"
                    y="score"
                />

            </VictoryChart>
        </div>
    )
}

export default BarChart; 