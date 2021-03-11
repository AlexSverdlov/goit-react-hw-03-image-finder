import React from 'react';
import styles from './Searchbar.module.css';

export default class Searchbar extends React.Component {
  state = {
    search: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ search: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormbutton}>
            <span className={styles.SearchFormbuttonlabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={this.state.search}
            className={styles.SearchForminput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
