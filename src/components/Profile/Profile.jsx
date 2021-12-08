import React from 'react';
import p from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    return <div className={p.profile}>
        <ProfileInfo />
        <MyPostsContainer />
  </div>
}

export default Profile;