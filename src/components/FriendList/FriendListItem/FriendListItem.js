import React from 'react';
import classes from '../FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ el }) => {
  return (
    <li className={classes.item}>
      {el.isOnline ? (
        <span className={classes.online}></span>
      ) : (
        <span className={classes.offline}></span>
      )}
      <img className={classes.avatarFrend} src={el.avatar} alt="" width="48" />
      <p className={classes.name}>{el.name}</p>
    </li>
  );
};

export default FriendList;

FriendList.propTypes = {
  el: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
