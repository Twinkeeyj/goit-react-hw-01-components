import React from 'react';
import './FriendList.css';
import Friend from './FriendListItem/FriendListItem';

const Friends = ({friends}) => {
    return (<ul className="friend-list">
    {friends.map(el => {
       return <Friend el={el} />
    })}
  </ul>)
};

export default Friends;
