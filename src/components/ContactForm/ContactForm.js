import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

export default function ContactForm({ onFormData }) {
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

ContactForm.propTypes = {
  onFormData: PropTypes.func.isRequired,
};
