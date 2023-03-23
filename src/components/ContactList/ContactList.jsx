import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Button } from './ContactList.styled';
import { fetchContacts, deleteContact } from '../../redux/operations';
import { useEffect } from 'react';
import {
  selectIsLoadingContacts,
  selectContactsError,
  selectFilteredContacts,
} from '../../redux/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoadingContacts);
  const error = useSelector(selectContactsError);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <b>Sorry, something went wrong</b>}
      {!error && (
        <List>
          {filteredContacts?.map(({ id, name, number }) => (
            <Item key={id}>
              {name}: {number}
              <Button
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                Delete
              </Button>
            </Item>
          ))}
        </List>
      )}
      <ToastContainer autoClose={2500}></ToastContainer>
    </>
  );
};
