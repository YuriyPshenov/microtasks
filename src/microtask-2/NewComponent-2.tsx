import React from "react";

type topCarsType = {
    topCars: Array<topCarsPropsType>
}

type topCarsPropsType = {
    manufacturer: string
    model: string
}


export const NewComponent2 = (props: topCarsType) => {
    return (
        <ol>
            <table>
                {props.topCars.map((topCarsNum, index) => {
                    return (
                        <li key={index}>
                            <tr>
                                <td>{topCarsNum.manufacturer}</td>
                                <td>{topCarsNum.model}</td>
                            </tr>
                        </li>
                    )
                })
                }
            </table>
        </ol>
    )
}