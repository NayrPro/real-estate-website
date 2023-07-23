export const ReplaceKeys = (keys : object) => {
    
    const newKeys = {'citySlct': 'city', 'stateSlct': 'state'};
    let replacedItems = Object.keys(keys).map((key) => {
        let newKey;
        if(key !== "properties"){
            newKey = newKeys[key] || key;
            return { [newKey] : keys[key] };
        }else{
            if(keys[key] == "rent"){
                return { "toRent" : true }
            }
            if(keys[key] == "sell"){
                return { "toBuy" : true }
            }
        }
    });

    const newTab = replacedItems.reduce((a, b) => Object.assign({}, a, b));

    return  newTab;
}