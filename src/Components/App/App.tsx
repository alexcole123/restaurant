import { Branches } from '../Branches/Branches';
import { Clicker } from '../Clicker/Clicker';
import { Clock } from '../Clock/Clock';
import { Copyrights } from '../Copyrights/Copyrights';
import { Desserts } from '../Desserts/Desserts';
import { Item } from '../Item/Item';
import { Logo } from '../Logo/Logo';
import { RandomDish } from '../RandomDish/RandomDish';
import { Specials } from '../Specials/Specials';
import { TakeAway } from '../TakeAway/TakeAway';
import './App.css';

function App(): JSX.Element {
    const x = 10 // Semicolon Injection
    return ( 
        <div className="App">

            <RandomDish />

            <Clock />

            <Logo />

            <h1>JB Restaurant</h1>
            <p>Best restaurant in Tel Aviv</p>

            <Specials />
            
            <Item />
            <TakeAway />
            <Desserts />
            <Branches />

            <Clicker />
            
            <Copyrights />

            
        </div>
    );
}

export default App;
