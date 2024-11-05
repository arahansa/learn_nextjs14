import React from 'react';

let renderNum = 0;

const Children1 = () => {

    console.log('나는 일반 칠드런!', renderNum++);

    return (
        <div>
            <span>Render 1</span>
         </div>
    );
};

export default Children1;
