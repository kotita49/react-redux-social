import React from 'react';
import pi from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div>
        <div>
        <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'/>
        </div>
        <div className={pi.descriptionBlock}>
      ava + description
    </div>
   
  </div>
}

export default ProfileInfo;