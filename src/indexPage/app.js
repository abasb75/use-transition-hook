import { Link } from "react-router-dom";

export default function App(){
    return (<>
        <ul>
            <li><Link to={'/without-transition'}>Without Transition</Link></li>
            <li><Link to={'/with-transition'}>With Transition</Link></li>
            <li><Link to={'/search-without-transition'}>Search Without Transition</Link></li>
            <li><Link to={'/search-with-transition'}>Search With Transition</Link></li>
        </ul>
    </>);
}