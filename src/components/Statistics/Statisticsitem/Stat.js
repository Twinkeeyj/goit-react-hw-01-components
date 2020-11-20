import React from 'react';
import classes from '../Statistics.module.css';
import PropTypes from "prop-types"

const Stat = ({ el }) => {
  let color = Math.floor(Math.random() * 256);
  let colorTwo = Math.floor(Math.random() * 256);
  let colorThree = Math.floor(Math.random() * 256);
  let backgroundColor=`rgba(${color}, ${colorTwo}, ${colorThree})`
    return (
    <li className={classes.item}  style={{
      backgroundColor: `${backgroundColor}`,
    }}>
      <span className={classes.label}>{el.label}</span>
      <span className={classes.percentage}>{el.percentage}%</span>
    </li>
  );
};

export default Stat;


Stat.propTypes = {
  item: PropTypes.arrayOf(
      PropTypes.exact({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
      })
  )
}