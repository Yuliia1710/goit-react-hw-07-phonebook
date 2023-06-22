import { Item, List, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { selectFilterContacts } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);
  // const filter = useSelector(state => state.filter);

  // const filteredContacts = contacts.filter(item =>
  //   item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
  // );

  return (
    <List>
      {contacts.map(item => {
        return (
          <Item key={item.id}>
            <p>{item.name}:</p>
            <p>{item.number}</p>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   deleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };
