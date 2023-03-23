import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onHadleChange = event => {
    let contactToFilter = event.target.value.trim().toLowerCase();
    dispatch(setFilter(contactToFilter));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="name"
        onChange={onHadleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Label>
  );
};
