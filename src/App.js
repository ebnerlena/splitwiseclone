import React from 'react';
import {
  Route, BrowserRouter as Router, Switch, Link, Redirect,
} from 'react-router-dom';
import UserSignUp from './containers/sign-up/container';
import SignIn from './containers/sign-in/container';
import MoneyTransactionCreate from './containers/money-transaction-create/container';
import MoneyTransactionsList from './containers/money-transactions-list/container';
import Button from './components/Button';
import SignOut from './containers/sign-out/container';

const App = () => (

  <>
    <Router>
      <header>
        <h1> Splitwise Clone </h1>
        <nav>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/money-transactions">Money Transactions</Link>
          <SignOut/>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/sign-out" component={SignIn} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={UserSignUp} />
          <Route
            path="/money-transactions"
            render={() => (
              <>
                <MoneyTransactionCreate />
                <MoneyTransactionsList />
              </>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </main>
      <footer> </footer>
    </Router>
  </>
);

export default App;
