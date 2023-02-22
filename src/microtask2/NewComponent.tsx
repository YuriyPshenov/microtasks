import React from 'react';
import s from './NewComponent.module.css';

type NewComponentPropsType = {
    //students: Array<StudentsType>
    students: StudentsType[]
}

type StudentsType = {
    id: number
    name: string
    age: number
}


const NewComponent = (props: NewComponentPropsType) => {

    const topCars = [
        {manufacturer: 'BMW', model: 'X5'},
        {manufacturer: 'Mersedes', model: 'MLS'},
        {manufacturer: 'Audi', model: 'Q7'}
    ]

    return (
        <div>
            <div>
                <h3>Students</h3>
                <ul>
                    {props.students.map(s => {
                            return (
                                <li key={s.id}>name: {s.name}, age: {s.age}</li>
                            )
                        }
                    )
                    }
                </ul>
            </div>
            <div>
                <h3>Cars</h3>
                <table className={s.table}>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>manufacturer</th>
                        <th>model</th>
                    </tr>
                    </thead>
                    <tbody>
                    {topCars.map((c, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{c.manufacturer}</td>
                        <td>{c.model}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewComponent;