import React from 'react';
import { storiesOf } from '@storybook/react';
import MoneyTransactionCreate from './presentation';
import MoneyTransactionList from '../../components/MoneyTransactionList';

storiesOf('Money Transactions', module)
  .add('Create', () => (
    <MoneyTransactionCreate />
  ))
  .add('List', () => (
    <MoneyTransactionList />
  ));
