import React from 'react';
import { storiesOf } from '@storybook/react';
import MoneyTransactionCreate from './presentation';
import data from '../../../db.json';

storiesOf('Money Transactions Create', module)
  .add('Create', () => (
    <MoneyTransactionCreate users={data.user} moneyTransactions={data['money-transaction']} onLoadData={()=>{}} onCreate={()=>{}}></MoneyTransactionCreate>
  ));
