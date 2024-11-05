import React from 'react';


interface Prop{
    num: number;
}

const MemoWithPropChild = ({num} : Prop)  => {

    console.log('나는 MemoWithPropChild : ', num);

    return (
        <div>
            <span>MemoWithPropChild . 받은 인자 {num}</span>
         </div>
    );
};

export default React.memo(MemoWithPropChild);
