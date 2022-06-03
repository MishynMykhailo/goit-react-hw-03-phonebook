import s from '../Filter/Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </label>
  );
};
export default Filter;
