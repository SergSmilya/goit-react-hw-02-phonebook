import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormData = data => {
    const dataNameLowerCase = data.name.toLowerCase().trim();

    if (
      this.state.contacts.find(
        el => dataNameLowerCase === el.name.toLowerCase().trim()
      )
    ) {
      alert(`Contact was added`);
      return;
    }

    const id = nanoid(3);
    data = { ...data, id };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  onFilterControl = value => {
    this.setState({ filter: value });
  };

  onFilterSearch = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    // return contacts
    //   .map(contact => contact.name.toLowerCase().includes(filter) && contact)
    //   .filter(contact => contact !== false);
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100%',
          display: 'block',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onFormData={this.onFormData} />

        <h2>Contacts</h2>
        <Filter onFilterControl={this.onFilterControl} />
        <Contacts
          contacts={this.onFilterSearch()}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

// App.propTypes = {};
