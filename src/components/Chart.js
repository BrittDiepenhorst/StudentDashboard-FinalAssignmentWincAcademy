import React from "react";
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTooltip,
    VictoryLine,
    VictoryGroup
} from "victory";

const getRandomRating = () => Math.random() * 5;

// const getDifficultyRating = () => 

// const getEnjoymentRating= () => 

let assignmentRatingAverage = [
    { assignment: "SCRUM" },
    { assignment: "W1D1-1" },
    { assignment: "W1D2-1" },
    { assignment: "W1D2-2" },
    { assignment: "W1D2-3" },
    { assignment: "W1D2-4" },
    { assignment: "W1D2-5" },
    { assignment: "W1D3-1" },
    { assignment: "W1D3-2" },
    { assignment: "W1D3-4" },
    { assignment: "W1D3-5" },
    { assignment: "W1D3 - Project - Guess-the-number" },
    { assignment: "W1D4-1" },
    { assignment: "W1D4 - Project - Kleurentoggle" },
    { assignment: "W1D5 - Project - Galgje" },
    { assignment: "W2D1-1" },
    { assignment: "W2D1-2" },
    { assignment: "W2D2-1" },
    { assignment: "W2D2-2" },
    { assignment: "W2D2-3" },
    { assignment: "W2D3-1" },
    { assignment: "W2D3-2" },
    { assignment: "W2D3-3" },
    { assignment: "W2D4-1" },
    { assignment: "W2D4-2" },
    { assignment: "W2D4-3" },
    "W2D5 - Project - Filmzoeker",
    "W3D1-1",
    "W3D1-2",
    "W3D1-3",
    "W3D1-4",
    "W3D2-1",
    "W3D2-2",
    "W3D2-3",
    "W3D3-1",
    "W3D3-2",
    "W3D3-3",
    "W3D3-4",
    "W3D4-1",
    "W3D4-2",
    "W3D5 - Project - Todo-List",
    "W4D2-1",
    "W4D2-2",
    "W4D2-3",
    "W4D2-4",
    "W4D3-1",
    "W4D3-2",
    "W4D3-3",
    "W4D3-4",
    "W4D3-5",
    "W4D3 - Project - Next-Level CSS",
    "W5D4-1",
    "W5D5 - Project - Lil_Playlist",
    "W6D1-1",
    "W6D2-1",
    "W6D2 - Project - Eindopdracht"
];

assignmentRatingAverage = assignmentRatingAverage.map(avg => ({
    assignment: avg.assignment,
    difficultyRating: getRandomRating(),
    enjoymentRating: getRandomRating()
}));

// Add label
const assignmentRatingAverageWithLabels = assignmentRatingAverage.map(avg => ({
    assignment: avg.assignment,
    difficultyRating: avg.difficultyRating,
    enjoymentRating: avg.enjoymentRating,
    label: `Opdracht ${
        avg.assignment
        }, difficultyRating: ${avg.difficultyRating.toFixed(
            1
        )}, enjoymentRating: ${avg.enjoymentRating.toFixed(1)}`
}));

const BarChart = () => (
    <>
        <VictoryChart domainPadding={15}>
            <VictoryGroup offset={20}>
                <VictoryBar
                    labelComponent={<VictoryTooltip />}
                    data={assignmentRatingAverageWithLabels}
                    x="assignment"
                    y="difficultyRating"
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentRatingAverageWithLabels.map(
                        avg => avg.assignment
                    )}
                />
                <VictoryBar
                    labelComponent={<VictoryTooltip />}
                    data={assignmentRatingAverageWithLabels}
                    x="assignment"
                    y="enjoymentRating"
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentRatingAverageWithLabels.map(
                        avg => avg.assignment
                    )}
                />
            </VictoryGroup>
            <VictoryAxis
                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                tickValues={[1, 2, 3, 4, 5]}
                tickFormat={assignmentRatingAverageWithLabels.map(
                    avg => avg.assignment
                )}
            />
            <VictoryAxis dependentAxis />
        </VictoryChart>

        <VictoryChart domainPadding={15}>
            <VictoryLine
                style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc" }
                }}
                data={assignmentRatingAverage}
                x="assignment"
                y="difficultyRating"
            />
            <VictoryLine
                style={{
                    data: { stroke: "#ff00ff" },
                    parent: { border: "1px solid #ccc" }
                }}
                data={assignmentRatingAverage}
                x="assignment"
                y="enjoymentRating"
            />
            <VictoryAxis
                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                tickValues={[1, 2, 3, 4, 5]}
                tickFormat={assignmentRatingAverage.map(avg => avg.assignment)}
            />
            <VictoryAxis dependentAxis />
        </VictoryChart>
    </>
);
export default BarChart;