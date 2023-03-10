import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contacts from './Contacts/Contacts';
import Input from './Input/Input';

export default class App extends Component {
  state = {
    contacts: [],
  };

  onFormData = data => {
    console.log(data);
    const { contacts } = this.state;
    this.setState(() => {
      contacts.push(data);
    });
  };

  render() {
    return (
      <div
      // style={{
      //   height: '100%',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <Input onFormData={this.onFormData} />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.array,
};
