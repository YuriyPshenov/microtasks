import React from "react";


type NewComponentPropsType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}



export const NewComponent = (props: NewComponentPropsType) => {

    return (
        <ul>
            {props.students.map((objectFormStudentArray, index) => {
                return (
                    <li key={objectFormStudentArray.id}>
                        <span>{objectFormStudentArray.name}</span>
                        <span>age: {objectFormStudentArray.age}</span>
                    </li>
                )
            })
            }
        </ul>
    )
}