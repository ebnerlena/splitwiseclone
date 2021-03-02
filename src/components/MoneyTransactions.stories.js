import React from 'react';
import { storiesOf } from '@storybook/react';
import MoneyTransactionCreate from './MoneyTransactionCreate';
import MoneyTransactionList from './MoneyTransactionList';

storiesOf('Money Transactions', module)
  .add('Create', () => (
    <MoneyTransactionCreate />
  ))
  .add('List', () => (
    <MoneyTransactionList />
  ));
