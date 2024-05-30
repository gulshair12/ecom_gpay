import React from 'react';
import TransactionItem from '../Welcome/TransactionItem';

const betTransactions = [
  { name: 'Alice Smith', amount: 50, image: '/Ellipse 2.png' },
  { name: 'Bob Johnson', amount: 120, image: '/Ellipse 3.png' },
  { name: 'Charlie Brown', amount: 200, image: '/Ellipse 4.png' },
  { name: 'Alice Smith', amount: 50, image: '/Ellipse 5.png' },
  { name: 'Bob Johnson', amount: 120, image: '/Ellipse 6.png' },
];

const BetTokenList = () => {
  return (
    <div className='space-y-2 md:space-y-4'>
      {betTransactions.map((transaction, index) => (
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

export default BetTokenList;
