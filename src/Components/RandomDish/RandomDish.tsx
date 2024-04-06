import "./RandomDish.css";
import dishSource1 from "../../Assets/Images/dish1.jpg";
import dishSource2 from "../../Assets/Images/dish2.jpg";
import dishSource3 from "../../Assets/Images/dish3.jpg";
import dishSource4 from "../../Assets/Images/dish4.jpg";
import dishSource5 from "../../Assets/Images/dish5.jpg";
import { useEffect, useState } from "react";

export function RandomDish(): JSX.Element {

    const arr = [dishSource1, dishSource2, dishSource3, dishSource4, dishSource5];
    const [source, setSource] = useState<string>();
    const [active, setActive] = useState<boolean>(true);

    useEffect(() => {

        if (!active) return;

        const timerId = setInterval(() => {
            const index = Math.floor(Math.random() * 5);
            setSource(arr[index]);
        }, 500);

        return () => {
            clearInterval(timerId);
        }

    }, [active]);

    
    function toggle(): void {
        setActive(!active);
    }

    return (
        <div className="RandomDish">
            <img src={source} />
            <button onClick={toggle}>Toggle</button>
        </div>
    );
}