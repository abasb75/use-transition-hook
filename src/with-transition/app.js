import { useState, useTransition } from "react";

import TabButton from "./TabButton";
import HomeTab from "./HomeTab";
import PostsTab from "./PostTab";
import AboutTab from "./AboutTab";
import './style.css';

function App(){
    
    const [isPending,startTransition] = useTransition();
    const [tab,setTab] = useState('home');
    
    const setTabWithTransition = (tab)=>{
        startTransition(()=>{
            setTab(tab);
        });
    }

    return (<>
        <div className="flex">
            <TabButton label={'home'} isActive={tab==='home'} onClick={()=>setTabWithTransition('home')} />
            <TabButton label={'posts'} isActive={tab==='posts'} onClick={()=>setTabWithTransition('posts')} />
            <TabButton label={'about'} isActive={tab==='about'} onClick={()=>setTabWithTransition('about')} />
        </div>
        <hr/>
        {isPending?<p>loding ...</p>:(<>
            {tab==='home' && <HomeTab />}
            {tab==='posts' && <PostsTab />}
            {tab==='about' && <AboutTab />}
        </>)}
    </>);
}

export default App;