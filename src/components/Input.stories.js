import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import DecimalInput from './DecimalInput';
import PasswordInput from './PasswordInput';

const options = [
  {
    label: 'Option1',
    value: '1',
  },
  {
    label: 'Option2',
    value: '2',
  },
];

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
    <SelectInput labelText="Options" options={options} />
  ));
