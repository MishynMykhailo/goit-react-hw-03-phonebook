import { Component } from 'react';
import s from '../ContactForm/ContactForm.module.css';
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handlerSumbit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handlerSumbit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handlerChange}
            value={this.state.name}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            onChange={this.handlerChange}
            value={this.state.number}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact{' '}
        </button>
      </form>
    );
  }
}
