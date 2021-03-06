import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 25,
            skill: 'Detective'},
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Reporter'}

    ]
    const personList = persons.map(person =><Person person={person}/>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
