import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

export default function Input({ onFormData }) {
  function handleSubmit(values, { resetForm }) {
    onFormData(values);
    resetForm();
  }

  const initialValues = {
    name: '',
    number: '',
  };

  // ValidationSchema
  const Schema = yup.object({
    name: yup.string().required(),
    number: yup.number().required(),
  });

  return (
    <div>
      <h1>Phonebook</h1>

      {/* Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Name
            <Field type="text" name="name"></Field>
          </label>

          <label>
            Number
            <Field type="tel" name="number"></Field>
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}

Input.propTypes = {
  onFormData: PropTypes.func.isRequired,
};
