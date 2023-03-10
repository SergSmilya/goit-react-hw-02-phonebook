import PropTypes from 'prop-types';
export default function Contacts({ contacts }) {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <span>{contact.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
