import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SignOut from '../containers/sign-out/container';
import { auth } from '../firebase';

const Navigation = () => {
  let { pathname } = window.location;

  useEffect(() => {
    pathname = window.location.pathname;
  }, [window.location.pathname]);

  if (!auth.currentUser) {
    return (
      <nav>
        <Link to="/sign-up" className={pathname.match('/sign-up') ? 'active' : ''}>Sign Up</Link>
        <Link to="/sign-in" className={pathname.match('/sign-in') ? 'active' : ''}>Sign In</Link>
        <Link to="/money-transactions" className={pathname.match('/money-transactions') ? 'active' : ''}>Money Transactions</Link>
      </nav>
    );
  }
  return (
    <nav>
      <Link to="/money-transactions" className={pathname.match('/money-transactions') ? 'active' : ''}>Money Transactions</Link>
      <SignOut />
    </nav>
  );
};

export default Navigation;
