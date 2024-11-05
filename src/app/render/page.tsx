"use client"
import Children1 from "@/components/render/Children1";
import MemoChild from "@/components/render/MemoChild";
import {useCallback, useState} from "react";
import MemoWithPropChild from "@/components/render/MemoWithPropChild";

const Page = () => {

    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    const onClick = useCallback(() => {
        setNum(prevState => prevState + 1);
    }, []);

    const handleClick2 = useCallback(()=>{
        setNum2(prevState => prevState + 1);
    }, []);

    return (
        <div>
            <button onClick={onClick}>클릭 렌더링 증가 Num : {num}</button>
            <br/>
            <button onClick={handleClick2}>클릭 렌더링 증가222 Num2 : {num2}</button>
            <br/><br/>
            <Children1/>
            <MemoChild/>
            <MemoWithPropChild num={num}/>
        </div>
    );
};

export default Page;
