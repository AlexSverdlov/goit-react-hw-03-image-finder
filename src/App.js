import React from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import './App.css';

class App extends React.Component {
  state = {
    keypixabay: '19640403-30f621284d90658aa34214f88',
    page: 1,
    datahits: [],
    search: '',
    isloading: false,
    showModal: false,
    lrgUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.getImageFromAPI();
    }
  }

  getImageFromAPI = () => {
    this.setState({ isloading: true });
    axios
      .get(
        `https://pixabay.com/api/?key=${this.state.keypixabay}&q=${this.state.search}&image_type=photo&page=${this.state.page}&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        this.setState(prevState => ({
          datahits: [...prevState.datahits, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .finally(this.setState({ isloading: false }));
  };

  handleSubmit = searchtext => {
    this.setState({ search: searchtext, page: 1, datahits: [] });
  };

  toggleModal = largeImg => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      lrgUrl: largeImg,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          images={this.state.datahits}
          onOpenModal={this.toggleModal}
        />

        {this.state.isloading && <h1>Загружаем</h1>}
        {this.state.datahits.length > 0 && !this.state.isloading && (
          <Button onClick={this.getImageFromAPI} />
        )}
        {this.state.showModal && (
          <Modal largeImg={this.state.lrgUrl} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}
export default App;
