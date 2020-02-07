import React from 'react'
//HOC higher order component
const UpdatedComponent = (OrigonalComponent) =>{
    class NewComponent extends React.Component{
        reder(){
            return <OrigonalComponent name="Tony"/>;
        }
    }
    return NewComponent;
}

export default UpdatedComponent