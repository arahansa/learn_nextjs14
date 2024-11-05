import React from 'react';

const MemoChild = () => {

    console.log('나는 MemoChild');

    return (
        <div>
            <span>MemoChild ---</span>
         </div>
    );
};

export default React.memo(MemoChild);
