import React from "react";
import studentData from '../utils/mockdata_Winc.json'
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
    VictoryTooltip,
    VictoryLine,
    VictoryGroup
} from "victory";

const Chart = () => {

    return (
        <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={20}
        >

            <VictoryAxis
                tickValues={[0, 1, 2, 3, 4]}
                tickFormat={studentData.reviews.map(review => review.assignment)}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={[1, 2, 3, 4]}
            // tickFormat={(x) => (`$${x / 1000}k`)}
            />
            < VictoryBar
                //data={data}
                x="assignment"
                y="score"
            />
        </VictoryChart>
    )
}
export default Chart;