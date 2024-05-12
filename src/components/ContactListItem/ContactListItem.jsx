import { useDispatch } from 'react-redux';
import style from './ContactListItem.module.css';
import { deleteContact } from '../../redux/operations';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={style.contactListItem}>
      {name}: {number}
      <button
        className={style.contactListItemDeleteButton}
        type="button"
        onClick={handleDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactListItem;
