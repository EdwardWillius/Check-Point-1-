// Transactions.jsx
import React from 'react';
import './Transactions.css'; // Import file CSS untuk styling

const Transactions = () => {
  // Contoh data transaksi, Anda dapat menggantinya dengan data asli
  const transactions = [
    { id: 1, date: '2023-09-01', amount: 100, status: 'Completed' },
    { id: 2, date: '2023-09-05', amount: 50, status: 'Pending' },
    { id: 3, date: '2023-09-10', amount: 75, status: 'Completed' },
  ];

  return (
    <div className="transactions-container">
      <h2>Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table className="transactions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id} className={transaction.status === 'Completed' ? 'completed' : 'pending'}>
                <td>{transaction.id}</td>
                <td>{transaction.date}</td>
                <td>${transaction.amount}</td>
                <td>{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Transactions;