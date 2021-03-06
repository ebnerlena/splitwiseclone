import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import DecimalInput from './DecimalInput';
import PasswordInput from './PasswordInput';
import Users from '../data/User.json';

storiesOf('Input Elements', module)
  .add('Text Input', () => (
    <TextInput labelText="Username"> </TextInput>
  ))
  .add('Decimal Input', () => (
    <DecimalInput labelText="Number" />
  ))
  .add('Password Input', () => (
    <PasswordInput labelText="Password" />
  ))
  .add('Select Input', () => (
    <SelectInput labelText="Options" options={Users} />
  ));
