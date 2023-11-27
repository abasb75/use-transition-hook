import { useState } from "react";

import TabButton from "./TabButton";
import HomeTab from "./HomeTab";
import PostsTab from "./PostTab";
import AboutTab from "./AboutTab";
import './style.css';

function App(){
    const [tab,setTab] = useState('home');

    const setTabWithoutTransition = (tab)=>{
        setTab(tab);
    }

    return (<>
        <div className="flex">
            <TabButton label={'home'} isActive={tab==='home'} onClick={()=>setTabWithoutTransition('home')} />
            <TabButton label={'posts'} isActive={tab==='posts'} onClick={()=>setTabWithoutTransition('posts')} />
            <TabButton label={'about'} isActive={tab==='about'} onClick={()=>setTabWithoutTransition('about')} />
        </div>
        <hr/>
        {tab==='home' && <HomeTab />}
        {tab==='posts' && <PostsTab />}
        {tab==='about' && <AboutTab />}
    </>);
}

export default App;