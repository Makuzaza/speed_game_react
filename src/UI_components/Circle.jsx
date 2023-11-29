import React from 'react';

function Circle({id, clickHandler}) {
    // const handleClick = () => {
    //     console.log(`Clicked on circle with ID: ${id}`);
    // };
    return (
        <div className="circle" onClick={()=>clickHandler(id)}>
           <p className="hidden">{id}</p>
        </div>
    );
}

export default Circle;
