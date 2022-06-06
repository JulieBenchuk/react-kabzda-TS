import React, {useEffect, useState} from 'react';


export const SetTimeOut = () => {
    console.log("Component is rendering...")
    const [counter, setCounter] = useState(0)
    const changer = (state: number)=>{
        return state+1
    }
/*    useEffect(()=> {
        console.log("UseEffect")
        setInterval(()=>{
            console.log("Interval")
           setCounter(changer)
        }, 2000)
    }, [])*/

    return (
        <div>
            Counter: {counter}
            <button onClick={() => setCounter(counter+1)}>+</button>
        </div>
    );
};
