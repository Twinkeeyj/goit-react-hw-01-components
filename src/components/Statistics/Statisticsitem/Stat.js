import React from 'react';

const Stat = ({ el }) => {
    return (
    <li className="item">
      <span className="label">{el.label}</span>
      <span className="percentage">{el.percentage}</span>
    </li>
  );
};

export default Stat;