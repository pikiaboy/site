import React from 'react'; 

const openableItems = ['resume', 'blog', 'projects'];
const Open = (arguements) => {
    console.log(arguements);

    if (!arguements || arguements.length === 0) {
        return <span>Provide a section to open. Open-able items include { openableItems.join(',') }</span>
    }

    if (arguements.includes(openableItems)) {
        console.log("this is a valid item")
    }

    return <span>You tried to open {arguements.toString()}</span>
}


export default Open;