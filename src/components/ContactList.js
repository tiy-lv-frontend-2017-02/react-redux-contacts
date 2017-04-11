import React from 'react'
import {Link} from 'react-router-dom'
import {getContacts} from '../api/contact'
import {connect} from 'react-redux'

const ContactList = React.createClass({
  componentWillMount() {
    getContacts()
  },
  render() {
    return (
      <div>
        <h1>My Peeps</h1>
        <ul>
          {this.props.contacts.map(contact=>(
            <li>
              <Link to={'/contact/' + contact.id}>{contact.fname} {contact.lname}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
})

function mapStateToProps (appState) {
  return {contacts: appState.contacts}
}

export default connect(mapStateToProps)(ContactList)