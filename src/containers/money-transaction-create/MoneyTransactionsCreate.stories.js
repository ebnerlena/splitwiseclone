import React from 'react';
import { storiesOf } from '@storybook/react';
import MoneyTransactionList from './presentation';

storiesOf('Money Transactions', module)
  .add('List', () => (
    <MoneyTransactionList />
  ));
