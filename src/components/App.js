import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ContactList from './ContactList'
import ContactView from './ContactView'
import AddContact from './AddContact'
import {Provider} from 'react-redux'
import store from '../store'

export default React.createClass({
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Link to="/add">Add Contact</Link><br />
            <Route exact={true} path="/" component={ContactList} />
            <Route path="/contact/:fartbucket" component={ContactView} />
            <Route path="/add" component={AddContact} />
          </div>
        </Router>
      </Provider>
    )
  }
})