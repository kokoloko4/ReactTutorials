import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

function App() {

  const renderHome = () => <HomeContainer />

  const renderCustomerContainer = (props) => <CustomerContainer dni={props.match.params.dni}/>;

  const renderCustomerListContainer = () => <CustomersContainer />;

  const renderCustomerNewContainer = () => <NewCustomerContainer />;
  
  return (
    <Router>
      <div>
        <Route exact path="/" component={renderHome} />
        <Route exact path="/customers" component={renderCustomerListContainer} />
        <Switch>
          <Route path="/customers/new" component={renderCustomerNewContainer} />
          <Route path="/customers/:dni" render={renderCustomerContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
