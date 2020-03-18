import React from 'react';
import './App.css';
import ContactList from './Components/contact/ContactList';
import AddContact from './Components/contact/AddContact';
import About from './Pages/About';
import {HashRouter as Router, Route, Switch}  from 'react-router-dom';
import Header from './Components/Header/Header';
import NotFound from './Pages/NotFound';
import Test from './Components/Test/Test';
import EditContact from './Components/contact/EditContact';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {

  render() {
    return <div className="App">
        <Provider store={store}>
          <Router>
            <div className="container-fluid">
              <Header></Header>
            </div>
            <div className="container-fluid">
              <Switch>
                <Route exact path="/" component={ContactList}></Route>
                <Route exact path="/contact/add" component={AddContact}></Route>
                <Route exact path="/contact/edit/:id" component={EditContact}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/test" component={Test}></Route>
                <Route exact component={NotFound}></Route>
              </Switch>
            </div>
          </Router>
        </Provider>
    </div>
  };
}

export default App;
