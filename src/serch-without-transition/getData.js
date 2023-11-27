function getData(query){
    const items = [];
    for(var i=1;i<=5000;i++){
        items.push(getItem(query,i));
    }
    return items;
}

function getItem(query,i){
    return `${query} #${i}`
}

export default getData;