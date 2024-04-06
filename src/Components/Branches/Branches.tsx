import "./Branches.css";

export function Branches(): JSX.Element {

    const branchList = [
        {id: 1, name: "Cool Pasta", address: "Hertzel 12, Tel Aviv"},
        {id: 2, name: "Amazing Pizza", address: "Hasharon 17, Ramat-Gan"},
        {id: 3, name: "Green Day", address: "Homa Umigdal 29"},
    ];

    return (
        <div className="Branches">
            <p>Our Branches: </p>
			<ul>
                {branchList.map(b => <li key={b.id}>Name: {b.name}, Address: {b.address}</li>)}
            </ul>
        </div>
    );
}
