import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import CanvasAnimation from './CanvasAnimation/CanvasAnimation';
import { useEffect, useState } from 'react';
// import styles from './App.module.css';
import { Container, Wrapper, Title, SubTitle } from './App.styled';

const App = () => {
  const [contact, setContact] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts) {
      setContact(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contact));
  }, [contact]);

  const addContact = contact => {
    const isInCointact = contact.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInCointact) {
      alert(`${contact.name} already exists in contacts`);
      return;
    }
    setContact(prevContact => [{ id: nanoid(), ...contact }, ...prevContact]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contact.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  const removeContact = contactId => {
    setContact(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  return (
    <Container>
      <CanvasAnimation />
      <Title>Phone Book</Title>

      <ContactForm onSubmit={addContact} />

      <SubTitle>Contacts</SubTitle>
      {contact.length > 0 ? (
        <Filter value={filter} onChangeFilter={changeFilter} />
      ) : (
        <Wrapper>Your phone book is empty. Add the first contact!</Wrapper>
      )}
      {contact.length > 0 && (
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={removeContact}
        />
      )}
    </Container>
  );
};

export default App;
