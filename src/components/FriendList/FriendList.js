import React from 'react';
import classes from './FriendList.module.css';
import Friend from './FriendListItem/FriendListItem';
import PropTypes from "prop-types"

const Friends = ({friends}) => {
    return (<ul className={classes.friendList}>
    {friends.map(el => {
       return <Friend key={el.id} el={el} />
    })}
  </ul>)
};

export default Friends;

Friends.propTypes={
  friends: PropTypes.array.isRequired,
};