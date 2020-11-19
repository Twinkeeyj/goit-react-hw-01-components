import React from 'react';
import './Statistics.css';
import Stat from './Statisticsitem/Stat';

const Statistics = ({ data, titleText }) => {
  return (
    <section className="statistics">
      <h2 className="title">{titleText}</h2>
      <ul className="stat-list">
        {data.map(el => {
          return <Stat el={el} />;
        })}
      </ul>
    </section>
  );
};
Statistics.defaultProps = {
  titleText: '',
};
export default Statistics;
