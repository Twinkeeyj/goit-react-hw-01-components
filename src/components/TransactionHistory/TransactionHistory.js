import React from 'react';
import classes from'./TransactionHistory.module.css';
import PropTypes from "prop-types"

const Transaction = ({items}) => {

  return (
    <table className={classes.transactionHistory}>
  <thead>
    <tr>
      <th className={classes.cellType}>Type</th>
      <th className={classes.cellAmount}>Amount</th>
      <th className={classes.cellCurrency}>Currency</th>
    </tr>
  </thead>

  <tbody>

      {items.map(el=>{
        return <tr key={el.id}>
        <td className={classes.cellType}>{el.type}</td>
        <td className={classes.cellAmount}>{el.amount}</td>
        <td className={classes.cellCurrency}>{el.currency}</td>
        </tr>

          })}

    </tbody>
</table>
  );
};
export default Transaction;

Transaction.propTypes={
  items: PropTypes.arrayOf(
   PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
   })
  )
};