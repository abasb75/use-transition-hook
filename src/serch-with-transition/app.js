import { useState, useTransition } from "react";
import getData from "./getData";

function App(){
    const [result,setResult] = useState([]);
    const [isPending,startTransition] = useTransition();

    const search = (e)=>{
        const query = e.target.value;
        startTransition(()=>{
            setResult(
                getData(query)
            );
        });
    }

    return (<>
        <input type="text" onChange={search} placeholder="type here" />
        <hr></hr>
        {isPending?<p>loading ...</p>:(<ul>
            {result.map(item=>(<li key={item}>{item}</li>))}
        </ul>)}
        
    </>);
}

export default App;