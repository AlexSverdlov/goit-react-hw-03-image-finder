import React from 'react';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar/Searchbar';
import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import fetchTodos from './services/todos-api';
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

    if (prevState.datahits !== this.state.datahits) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  getImageFromAPI = () => {
    this.setState({ isloading: true });
    const { keypixabay, search, page } = this.state;
    fetchTodos(keypixabay, search, page)
      .then(data => {
        this.setState(prevState => ({
          datahits: [...prevState.datahits, ...data.hits],
          page: prevState.page + 1,
        }));
      })
      .finally(() => {
        this.setState({ isloading: false });
      });
  };

  handleSubmit = searchtext => {
    this.setState({ search: searchtext, page: 1, datahits: [] });
  };

  openModal = largeImg => {
    this.setState({ lrgUrl: largeImg });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          images={this.state.datahits}
          onOpenModal={this.openModal}
        />

        {this.state.isloading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
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
