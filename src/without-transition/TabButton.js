function TabButton({label,onClick,isActive}){
    return (<button onClick={onClick} style={{background:isActive?'white':''}}>
        {label}
    </button>);
}

export default TabButton;