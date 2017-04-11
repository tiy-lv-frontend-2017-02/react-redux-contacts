import store from '../store'
import axios from 'axios'
import * as actions from '../actions.js'

export function getContacts() {
  axios.get('http://localhost:3001/contacts').then(results=>{
    store.dispatch({
      type: actions.GET_CONTACTS,
      contacts: results.data
    })
  })
}

export function getContact(id) {
  axios.get('http://localhost:3001/contacts/' + id).then(results=>{
    store.dispatch({
      type: actions.GET_CONTACT,
      contact: results.data
    })
  })
}

export function addContact(obj) {
  axios.post('http://localhost:3001/contacts/', obj).then(results=>{
    getContacts()
  })
}