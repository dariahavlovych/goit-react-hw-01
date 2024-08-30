import React from "react";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionsTable}>
      <thead>
        <tr className={s.tableTitle}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr className={s.tableRow} key={item.id}>
              <td className={s.type}>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
