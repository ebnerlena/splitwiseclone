import React, { useEffect, useState } from 'react';
import {
  Route, BrowserRouter as Router, Switch, Redirect,
} from 'react-router-dom';
import UserSignUp from './containers/sign-up/container';
import SignIn from './containers/sign-in/container';
import MoneyTransactionCreate from './containers/money-transaction-create/container';
import MoneyTransactionsList from './containers/money-transactions-list/container';
import Navigation from './components/Navigation';
import { auth } from './firebase';

const App = () => {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (usr) => {
    setUser(usr);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    const subsriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subsriber;
  }, []);

  if (initializing) return null;

  return (
    <Router>
      <header>
        <h1> Splitwise Clone </h1>
        <Navigation />
      </header>
      <main>
        <Switch>
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
          {
              (!user) ? <Redirect to="/sign-in" /> : <Redirect to="/money-transactions" />
            }
        </Switch>
      </main>
      <footer> </footer>
    </Router>
  );
};

export default App;
