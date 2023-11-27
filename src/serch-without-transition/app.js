import {  useState } from "react";
import getData from "./getData";

function App(){
    const [result,setResult] = useState([]);

    const search = (e)=>{
        const query = e.target.value;
        setResult(getData(query));
    }

    return (<>
        <input type="text"  onChange={search} placeholder="type here"  />
        <hr></hr>
        <ul>
            {result.map(item=>(<li key={item}>{item}</li>))}
        </ul>
    </>);
}

export default App;