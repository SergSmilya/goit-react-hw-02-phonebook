import PropTypes from 'prop-types';

// import Filter from 'components/Filter/Filter';

export default function Contacts({ contacts, onDeleteContact }) {
  return (
    <div>
      {/* <Filter onFilterControl={onFilterControl} /> */}
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: <span>{number}</span>
            </p>

            <button onClick={() => onDeleteContact(id)} type="button">
              delete contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
