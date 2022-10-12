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
        <table>
                {props.topCars.map((topCarsNum, index) => {
                    return (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>
                                {topCarsNum.manufacturer}
                            </td>
                            <td>
                                {topCarsNum.model}
                            </td>
                        </tr>
                    )
                })}
        </table>
    )
}

