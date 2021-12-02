import React from 'react';
import { NavLink } from 'react-router-dom';
import f from './../Friends.module.css';


const FriendItem = (props) => {
    return <div className={f.friendsItems}>
        <NavLink to={'/friends/' + props.id}>   {props.name} {props.lastname} </NavLink>
    </div>
}

export default FriendItem;