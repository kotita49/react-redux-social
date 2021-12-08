import React from 'react';

import f from './../Friends/Friends.module.css';
import FriendItem from './FriendItem/FriendItem';



const Friends = (props) => {
    
        let friendsElements = props.friendsData.map(fr => <FriendItem name={fr.name} lastname={fr.lastname} id={fr.id}/>)
    debugger;
       return <div className={f.friendDiv}>
        <div className={f.friendsItems}>
            {friendsElements}
                </div>
      
        </div>
       
}

export default Friends;