import React, {useState, useCallback} from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)
    

    const incAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    
    const incSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])
    return (
        <div>
            <Title/>
            <Count text="Age" count={age}/>
            <Button handleClick={incAge}>inc Age</Button>
            <Count text="salary" count={salary}/>
            <Button handleClick={incSalary}>inc salaray</Button>
        </div>
    )
}

export default ParentComponent
//useCallback Hook
/*
useCallback is a hook thatwill return a memoized version of the callback funcion
that only changesif one of the ependencies has changed

why use?
its useful when passinf callbacks to optimize child components that rely on
refrence equality to prevent unnecessary renders

how to use
import from react useCallback
look at code
*/