import React from 'react';
import { NavLink } from 'react-router-dom';
import SignOut from '../containers/sign-out/container';
import { auth } from '../firebase';

const Navigation = () => {
  if (!auth.currentUser) {
    return (
      <nav>
        <NavLink to="/sign-up" activeClassName="active">Sign Up</NavLink>
        <NavLink to="/sign-in" activeClassName="active">Sign In</NavLink>
        <NavLink to="/money-transactions" activeClassName="active">Money Transactions</NavLink>
        <SignOut disabled />
      </nav>
    );
  }
  return (
    <nav>
      <NavLink to="/money-transactions" activeClassName="active">Money Transactions</NavLink>
      <SignOut />
    </nav>
  );
};

export default Navigation;
