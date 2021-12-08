import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Friends from './Friends';




let mapStateToProps = (state) => {
    
    return {
        friendsData: state.friendPage.friendsData
    }
}

const FriendsContainer = connect(mapStateToProps, null)(Friends)

export default FriendsContainer;