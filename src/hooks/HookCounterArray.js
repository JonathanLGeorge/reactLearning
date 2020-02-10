import React, {useState} from 'react'

function HookCounterArray() {
    const [items, setItems] = useState([])


    //when additem is call, we make copy of all items in array with ...
    //to the list of copied items we append another oject to not override origional array
    //on first iteration length will be zero so id will stay unique and increase each time we add
    // value will be value 1-10
    const addItem = () => {
        setItems([... items,  {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounterArray
//make a copy using ...
//append the new item
//pass as argument to the seter function