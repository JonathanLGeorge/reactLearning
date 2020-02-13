import React, {useState} from 'react'
import useInput from './useInput';
    

function UserForm() {
    //const [firstName, setFirstName] = useState('');
    //const [lastName, setLastName] = useState('');

    //[value, bind, reset]
    const [firstName, bindFirstName, resetFirstname] = useInput('')
    const [lastName, bindLastName, resetLastname] = useInput('')

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstname();
        resetLastname();
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <lable>First Name</lable>
                    <input 
                       {...bindFirstName}
                        type='text'>
                    </input>
                </div>
                <div>
                    <lable>Last Name</lable>
                    <input
                        {...bindLastName}
                        type="text">
                    </input>
                </div>
                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
)
}

export default UserForm
/*
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <lable>First Name</lable>
                    <input 
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)} 
                        type='text'>
                    </input>
                </div>
                <div>
                    <lable>Last Name</lable>
                    <input
                        value={lastName}
                        type='text'
                        onChange={e => setLastName(e.target.value)}>
                    </input>
                </div>
                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
 */