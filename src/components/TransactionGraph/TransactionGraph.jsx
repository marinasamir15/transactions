
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import data from '../services/api/data.json'; 
import './TransactionGraph.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function TransactionGraph() {
  const [customers] = useState(data.customers);
  const [transactions, setTransactions] = useState(data.transactions);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleFilter = (filterType, value) => {
    if (filterType === 'customer') {
      setSelectedCustomer(value);
      if (value === '') {
        setFilteredTransactions(transactions);
      } else {
        const filtered = transactions.filter(trx => trx.customer_id === parseInt(value));
        setFilteredTransactions(filtered);
      }
    }
  };

  const getTransactionDataForCustomer = (customerId) => {
    const customerTransactions = transactions.filter(trx => trx.customer_id === parseInt(customerId));
    const groupedByDate = customerTransactions.reduce((acc, trx) => {
      acc[trx.date] = (acc[trx.date] || 0) + trx.amount;
      return acc;
    }, {});

    const dates = Object.keys(groupedByDate);
    const amounts = Object.values(groupedByDate);

    return {
      labels: dates,
      datasets: [
        {
          label: 'Total Transaction Amount',
          data: amounts,
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 2,
          fill: false,
        },
      ],
    };
  };

  return (
    <div className="App">
      <h1>Customer Transactions</h1>
      <select className='mb-5' onChange={(e) => handleFilter('customer', e.target.value)}>
        <option value="">Filter by Customer</option>
        {customers.map(customer => (
          <option key={customer.id} value={customer.id}>{customer.name}</option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCustomer && (
        <div>
           <h2>Total Transaction Amount per Day for {customers.find(c => c.id === parseInt(selectedCustomer))?.name}</h2>
                 <Line data={getTransactionDataForCustomer(selectedCustomer)} />
        </div>
      )}
    </div>
  );
}
