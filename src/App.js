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
      <header>
        <h1> Splitwise Clone </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/sign-in">Sign in</Link>
          <Link to="/money-transactions">Money Transactions</Link>
        </nav>
      </header>
      <main>
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
      </main>
      <footer> </footer>
    </Router>
  </>
);

export default App;
