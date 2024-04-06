import { useState } from "react";
import "./Clicker.css";

export function Clicker(): JSX.Element {

    // if(Math.random() < 0.5) {
    //     const [x, setX] = useState<number>(0);
    // }


    const [counter, setCounter] = useState<number>(0);

    function raiseCount(): void {
        setCounter(counter + 1);
    }

    function initToZero(): void {
        setCounter(0);
    }

    return (
        <div className="Clicker">
			<button onClick={raiseCount}>Click Me</button>
            <span>Total Clicks: {counter}</span>
            <button onClick={initToZero}>0️⃣</button>
        </div>
    );
}
