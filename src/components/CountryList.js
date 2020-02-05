import React from 'react'
import Card from "./Card"

function CountryList() {
    const countryList =[
        {
            id: 1,
            name: 'America',
            info: 25,
            title: 'Detective'
        },
        {
            id: 2,
            name: 'Mexico',
            info: 35,
            title: 'Reporter'}
    ]
        const cList = countryList.map(countryList => <Card key={countryList.id} countryList={countryList}/>)
        return (
            <div>
                {cList}
            </div>
        )
    }


export default CountryList 

