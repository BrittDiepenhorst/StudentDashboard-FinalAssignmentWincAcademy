import React from 'react';
// import MOCK_DATA from '../utils/MOCK_DATA.json'
// import mockdata_Winc from '../utils/mockdata_Winc.json'
// import * as V from 'victory';
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis
} from 'victory';

function BarChart() {

    const data = [];

    const getRandomRating = () => Math.random() * 5;
    // const getRandomRating = () => 2;

    let assignmentRatingAverage = [
        { assignment: "W1D1-2" },
        { assignment: "W1D1-1" },
        { assignment: "W1D1-3" },
        { assignment: "W1D2-1" },
        { assignment: "W1D2-2" },
        { assignment: "W1D3-1" },
        { assignment: "W1D3-1" },
        { assignment: "W1D3-2" },
        { assignment: "W1D3-3" },
        { assignment: "W1D3-4" },
        { assignment: "W1D3-5" },
        { assignment: "W1D3-6" }
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

    return (
        <div>
            <p>hello barchart</p>

            <VictoryChart domainPadding={15}>
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={[
                        "SCRUM",
                        "W1D1-1",
                        "W1D2-1",
                        "W1D2-2",
                        "W1D2-3",
                        "W1D2-4",
                        "W1D2-5",
                        "W1D3-1",
                        "W1D3-2",
                        "W1D3-4",
                        "W1D3-5",
                        "W1D3 - Project - Guess-the-number",
                        "W1D4-1",
                        "W1D4 - Project - Kleurentoggle",
                        "W1D5 - Project - Galgje",
                        "W2D1-1",
                        "W2D1-2",
                        "W2D2-1",
                        "W2D2-2",
                        "W2D2-3",
                        "W2D3-1",
                        "W2D3-2",
                        "W2D3-3",
                        "W2D4-1",
                        "W2D4-2",
                        "W2D4-3",
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
                    ]}
                />

                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentRatingAverageWithLabels.map(
                        avg => avg.assignment
                    )}
                />
                <VictoryAxis dependentAxis />
                <VictoryBar
                    data={assignmentRatingAverageWithLabels}
                    x="assignment"
                    y="enjoymentRating"
                />

            </VictoryChart>
        </div>
    )
}

export default BarChart; 