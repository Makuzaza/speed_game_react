import React from 'react';

function Circle({id, clickHandler, current}) {
    // const handleClick = () => {
    //     console.log(`Clicked on circle with ID: ${id}`);
    // };
    return (
        <div className={`circle ${current ? 'active' : ''}`}
         onClick={()=>clickHandler(id)}>
        </div>
    );
}

export default Circle;
