import React, {useReducer} from "react"
import { v4 as uuidv4 } from 'uuid';
import ContactContext from "./contactContext"
import ContactReducer from "./contactReducer"
import {ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, SET_CURRENT, CLEAR_CURRENT, FILTER_CONTACTS, CLEAR_FILTER} from "../types"

const ContactState = props =>{
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Jill Johnson",
                email: "jill@johnson.com",
                phone: 9878168401,
                type: 'professional'
            },
            {
                id: 2,
                name: "Sanskrita Saha",
                email: "sanskrita@saha.com",
                phone: 9878175601,
                type: 'personal'
            },
            {
                id: 3,
                name: "Anukriti Verma",
                email: "anukriti@verma.com",
                phone: 9878168401,
                type: 'personal'
            },
        ],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState)

    //Add Contact

    const addContact =(contact) => {
         contact.id = uuidv4();
         dispatch({type: ADD_CONTACT, payload: contact})
    }
    //Delete Contact

    const deleteContact =(id) => {
        dispatch({type: DELETE_CONTACT, payload: id})
   }
    //Set Current Contact
    const setCurrent = (contact) => {
        dispatch({type: SET_CURRENT, payload: contact})
    }

    //Clear current Contact

    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})
    }

    //Update Contact

    const updateContact = (contact) => {
        dispatch({type: UPDATE_CONTACT, payload: contact})
    }
    //Filter Contacts
    const filterContacts = (text) => {
        dispatch({type: FILTER_CONTACTS, payload: text})
    }

    //Clear Filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})
    }

    return (
        <ContactContext.Provider
         value={{
             contacts: state.contacts,
             current: state.current,
             filtered: state.filtered,
             addContact,
             deleteContact,
             setCurrent,
             clearCurrent,
             updateContact,
             filterContacts,
             clearFilter
         }}>{props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;