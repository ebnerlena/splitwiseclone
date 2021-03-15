import React from 'react';
import {
  Route, BrowserRouter as Router, Switch, Link, Redirect,
} from 'react-router-dom';
import SignUp from './components/UserSignUp';
import SignIn from './components/UserSignIn';
import MoneyTransactionList from './components/MoneyTransactionList';
import MoneyTransactionCreate from './components/MoneyTransactionCreate';
import MoneyTransaction from './containers/money-transactions/index';

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
                <MoneyTransactionList />
              </>
            )}
          />
          <Route path="/test" component={MoneyTransaction} />
          <Redirect to="/" />
        </Switch>
      </main>
      <footer> </footer>
    </Router>
  </>
);

export default App;
