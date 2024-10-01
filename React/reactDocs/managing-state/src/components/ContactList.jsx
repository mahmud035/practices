import React from 'react';

const ContactList = ({ contacts, selectedContact, onSelect }) => {
  return (
    <div>
      <hr />
      <section>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.email}>
              <button onClick={() => onSelect(contact)}>{contact.name}</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ContactList;
