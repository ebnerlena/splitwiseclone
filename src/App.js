import React from 'react';
import {
  Route, BrowserRouter as Router, Switch, Link, Redirect,
} from 'react-router-dom';
import SignUp from './components/UserSignUp';
import SignIn from './components/UserSignIn';
import MoneyTransactionCreate from './containers/money-transaction-create/container';
import MoneyTransactionsList from './containers/money-transactions-list/container';

const App = () => (
  <>
    <Router>
      <header>
        <h1> Splitwise Clone </h1>
        <nav>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/money-transactions">Money Transactions</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route
            path="/money-transactions"
            render={() => (
              <>
                <MoneyTransactionCreate />
                <MoneyTransactionsList />
              </>
            )}
          />
          <Route path="/test" component={MoneyTransactionsList} />
          <Redirect to="/" />
        </Switch>
      </main>
      <footer> </footer>
    </Router>
  </>
);

export default App;
