import * as actions from '../actions'

const initialState = {
  contacts: [],
  currentContact:{}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case actions.GET_CONTACTS:
      return {...state, contacts:action.contacts}
    case actions.GET_CONTACT:
      return {...state, currentContact:action.contact}
    default:
      return state
  }
}