import React from 'react'
import Person from './Person';

function NameListKey() {

const person =[
    {
        id: 1,
        name: 'Bruce',
        age: 25,
        skill: 'Detective'
    },
    {
        id: 2,
        name: 'Clark',
        age: 25,
        skill: 'Reporter'}
]
    const personList = person.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameListKey
