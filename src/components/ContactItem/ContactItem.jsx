import s from '../ContactItem/ContactItem.module.css';
const ContactItem = ({ name, number, id, onDeleteContacts }) => {
  return (
    <li className={s.li}>
      <div className={s.divItemContainer}>
        {name}: {number}{' '}
        <button
          type="button"
          className={s.button}
          onClick={() => onDeleteContacts(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
export default ContactItem;
