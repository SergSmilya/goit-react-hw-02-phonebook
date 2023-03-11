import { Formik, Field } from 'formik';

export default function Filter({ onFilterControl }) {
  function searchFilter(e) {
    const value = e.target.value.toLowerCase();
    onFilterControl(value);
  }
  return (
    <div>
      <Formik initValueFilter={{ filter: '' }}>
        <label>
          Search
          <Field type="text" name="filter" onChange={searchFilter}></Field>
        </label>
      </Formik>
    </div>
  );
}
