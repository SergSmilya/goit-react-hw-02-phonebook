import { Formik, Form, Field } from 'formik';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class Input extends Component {
  state = { name: '', number: '', id: nanoid(5) };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ id: nanoid(5) });
    this.props.onFormData(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        {/* Form */}
        <Formik>
          <Form onSubmit={this.handleSubmit}>
            <label>
              Name
              <Field
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              ></Field>
            </label>

            <label>
              Number
              <Field
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
              ></Field>
            </label>

            <button type="submit">Add contact</button>
          </Form>
        </Formik>
      </div>
    );
  }
}
