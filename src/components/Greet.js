import React from 'react'

const Greet= (props) =>{
    const {name, heroName} = props;
    return(
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
                <br/>
                Hi {name} AKA {hero}
            </h1>
            {props.children}
        </div>
    ) 
}
export default Greet;
 