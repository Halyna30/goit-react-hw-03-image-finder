import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  inputChange = e => {
    const value = e.currentTarget.value;

    this.setState({ query: value });
  };

  handlerSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handlerSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            placeholder="Search images and photos"
            onChange={this.inputChange}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
