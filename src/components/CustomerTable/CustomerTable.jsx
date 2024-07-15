
import React, { useState, useEffect } from 'react';
import data from '../services/api/data.json';

export default function CustomerTable() {
    const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setCustomers(data.customers);
    setTransactions(data.transactions);
  }, []);

  return (
    <div>
      <h2>Customer Transaction Data</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Transaction Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => {
            const customer = customers.find(c => c.id === transaction.customer_id);
            return (
              <tr key={transaction.id}>
                <td>{customer ? customer.name : 'Unknown Customer'}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

  
  
  

