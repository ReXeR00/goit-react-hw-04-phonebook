import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {`${contact.name} : ${contact.number}`}
          <Button
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
