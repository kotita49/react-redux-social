import React from 'react';

import f from './../Friends/Friends.module.css';
import FriendItem from './FriendItem/FriendItem';



const Friends = (props) => {

    let friendsElements = props.friendsData.map(f => <FriendItem name={f.name} lastname={f.lastname} id={f.id}/>)
       
       return <div className={f.friendDiv}>
        <div className={f.friendsItems}>
            {friendsElements}
                </div>
      
        </div>
       
}

export default Friends;