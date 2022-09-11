import React, { useState } from "react";
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

const Barchart = () => {

    return (
        <VictoryChart>
            <VictoryBar
                style={{ data: { fill: "tomato", width: 25 } }}
                data={[
                    { x: "cat", y: 10 },
                    { x: "dog", y: 25 },
                    { x: "bird", y: 40 },
                    { x: "frog", y: 50 },
                    { x: "fish", y: 50 }
                ]}
            />
            <VictoryAxis />
            {
                ["cat", "dog", "bird", "dog", "frog", "fish"].map((d, i) => {
                    return (
                        <VictoryAxis dependentAxis
                            key={i}
                            label={d}
                            style={{ tickLabels: { fill: "none" } }}
                            axisValue={d}
                        />
                    );
                })
            }
        </VictoryChart>

    )
}
export default Barchart;