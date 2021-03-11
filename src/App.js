import React from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import './App.css';

class App extends React.Component {
  state = {
    keypixabay: '19640403-30f621284d90658aa34214f88',
    page: 1,
    datahits: [],
    search: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.getImageFromAPI();
    }
  }

  getImageFromAPI = () => {
    axios
      .get(
        `https://pixabay.com/api/?key=${this.state.keypixabay}&q=${this.state.search}&image_type=photo&page=${this.state.page}&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        this.setState(prevState => ({
          datahits: response.data.hits,
          page: prevState.page + 1,
        }));
      });
  };

  handleSubmit = searchtext => {
    this.setState({ search: searchtext, page: 1 });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.datahits} />
        <Button />
      </div>
    );
  }
}
export default App;
