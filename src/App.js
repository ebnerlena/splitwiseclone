import React from 'react';
import {
  Route, BrowserRouter as Router, Switch, Link, Redirect,
} from 'react-router-dom';
import Signup from './components/UserSignUp';
import Button from './components/Button';
import MoneyTransactionList from './components/MoneyTransactionList';
import MoneyTransactionCreate from './components/MoneyTransactionCreate';

const App = () => (
  <>

    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sign-in">Sign in</Link>
        <Link to="/money-transactions">Money Transactions</Link>
      </nav>
      <Switch>
        <Route path="/sign-in" component={Signup} />
        <Route
          path="/money-transactions"
          render={() => (
            <>
              Hello
              <MoneyTransactionCreate />
              <MoneyTransactionList />
            </>
          )}
        />
        <Route path="/" render={() => <div> Home Page</div>} />
        <Route path="/test2" render={() => <Button>Click me</Button>} />
        <Redirect to="/" />
      </Switch>

      <div> Default rendered like a footer</div>
    </Router>
  </>
);

export default App;
