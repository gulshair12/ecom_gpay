import React from 'react';
import TransactionItem from '../Welcome/TransactionItem';

const transactions = [
  { name: 'Scarlett Neutral', amount: 10, image: 'path-to-image.png' },
  { name: 'James Mohn', amount: 30, image: 'path-to-image.png' },
  { name: 'William Sons', amount: 60, image: 'path-to-image.png' },
  { name: 'Oliver Charlotte', amount: 100, image: 'path-to-image.png' },
  { name: 'Liam Olivia', amount: 210, image: 'path-to-image.png' },
];

const BuyTokenList = () => {
  return (
    <div>
      {transactions.map((transaction, index) => (
        <TransactionItem
          key={index}
          name={transaction.name}
          amount={transaction.amount}
          image={transaction.image}
        />
      ))}
    </div>
  );
};

export default BuyTokenList;
