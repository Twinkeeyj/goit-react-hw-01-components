import React from 'react';
import classes from './Statistics.module.css';
import Stat from './Statisticsitem/Stat';
import PropTypes from 'prop-types';

const Statistics = ({ data, title }) => {
  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>titleText</h2>}
      <ul className={classes.statList}>
        {data.map(el => {
          return <Stat key={el.id} el={el} />;
        })}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};
