import React from 'react';
import { storiesOf } from '@storybook/react';
import MoneyTransactionList from './presentation';
import data from '../../../db.json';


storiesOf('Money Transactions', module)
  .add('List', () => (
    <MoneyTransactionList users={data.user} moneyTransactions={data['money-transaction']} onLoadData={()=>{}}></MoneyTransactionList>
  ));
