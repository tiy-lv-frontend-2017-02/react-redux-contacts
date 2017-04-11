import React from 'react'
import {getContact} from '../api/contact'
import {connect} from 'react-redux'

const ContactView = React.createClass({
  componentWillMount() {
    getContact(this.props.match.params.fartbucket)
  },
  goBack(e) {
    e.preventDefault()
    this.props.history.push("/")
  },
  render() {
    return (
      <div>
        <button onClick={this.goBack}>Go Back</button>
        <ul>
          <li>{this.props.fname} {this.props.lname}</li>
          <li>{this.props.email}</li>
          <li>{this.props.phone}</li>
          <li>{this.props.city}, {this.props.state}</li>
        </ul>
      </div>
    )
  }
})

function mapStateToProps(appState) {
  return {
    fname: appState.currentContact.fname,
    lname: appState.currentContact.lname,
    email: appState.currentContact.email,
    phone: appState.currentContact.phone,
    city: appState.currentContact.city,
    state: appState.currentContact.state
  }
}

export default connect(mapStateToProps)(ContactView)