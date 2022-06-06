import React, {useMemo, useState} from 'react';

const generateData = () => {
    console.log("Generate data")
    return 4634773833939;
}

export const UseState = () => {
    console.log("Hooks is rendering...")
    /*let initialValue = useMemo(generateData, []);*/
    const [counter, setCounter] = useState(generateData)
    const changer = (state: number) => state+1
    return (
        <div>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </div>
    );
};
