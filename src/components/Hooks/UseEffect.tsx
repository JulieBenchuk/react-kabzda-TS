import React, {useEffect, useState} from 'react';


export const UseEffect = () => {
    console.log("Component is rendering...")
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(10)
    useEffect(()=> {
        debugger
        console.log("UseEffect")
        document.title=counter.toString()
    }, [counter])
    return (
        <div>
            Counter: {counter} Fake: {fake}
            <button onClick={() => setFake(fake+1)}>+</button>
            <button onClick={() => setCounter(counter+1)}>+</button>
        </div>
    );
};
