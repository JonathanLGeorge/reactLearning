import React, {useState} from 'react'

function HookCounter3() {
    //a state variablecan be a string a number a boolean an object or array
    const[name, setName] = useState({firstname: '', lastName: ''});


    //when first and last name propertys change we update
    return (
        <form>
            <input 
                type="text" 
                value={name.firstName} 
                onChange={e => setName({...name, firstName: e.target.value})}>
            </input>

            <input 
                type="text" 
                value={name.lastName} 
                onChange={e => setName({...name, lastName: e.target.value})}>
            </input>

            <h2>Your first name is: {name.firstName}</h2>
            <h2>Your last name is: {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default HookCounter3
