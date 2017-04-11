import React from 'react'
import {addContact} from '../api/contact'

export default React.createClass({
  getInitialState() {
    return {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      city: '',
      state: ''
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    addContact(this.state)
    this.props.history.push('/')
  },
  handleChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder='fname' onChange={this.handleChange} name='fname' value={this.state.fname} /><br />
        <input placeholder='lname' onChange={this.handleChange} name='lname' value={this.state.lname} /><br />
        <input placeholder='email' onChange={this.handleChange} name='email' value={this.state.email} /><br />
        <input placeholder='phone' onChange={this.handleChange} name='phone' value={this.state.phone} /><br />
        <input placeholder='city' onChange={this.handleChange} name='city' value={this.state.city} /><br />
        <input placeholder='state' onChange={this.handleChange} name='state' value={this.state.state} /><br />
        <button type="submit">Submit</button>
      </form>
    )
  }
})