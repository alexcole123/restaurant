import "./Logo.css";
import logoSource1 from "../../Assets/Images/restaurant1.jpg";
import logoSource2 from "../../Assets/Images/restaurant2.jpg";
import logoSource3 from "../../Assets/Images/restaurant3.jpg";

export function Logo(): JSX.Element {

    const arr = [logoSource1, logoSource2, logoSource3];
    const index = Math.floor(Math.random() * 3); // 0/1/2
    
    return (
        <div className="Logo">
			<img src={logoSource1} />
			<img src={logoSource2} />
			<img src={logoSource3} />
			<img src={arr[index]} />
        </div>
    );
}
