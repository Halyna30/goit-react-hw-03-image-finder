import { Component } from 'react';
import fetch from './services/restApi';
import Loader from 'react-loader-spinner';

import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Modal from './Components/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
    isLoading: false,
    error: null,
    currentImage: { largeImageURL: '', description: '' },
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    return fetch(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleImageClick = event => {
    if (event.target.nodeName === 'IMG') {
      const largeImageURL = event.target.dataset.largeimage;
      const description = event.target.alt;

      this.setState({ currentImage: { largeImageURL, description } });
      this.toggleModal();
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images, isLoading } = this.state;
    const showBtn = images.length > 0 && !isLoading;
    const { largeImageURL, description } = this.state.currentImage;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <div className="loader">
          {isLoading && (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          )}
        </div>

        <ImageGallery
          images={this.state.images}
          onClick={this.handleImageClick}
        />
        {showBtn && <Button onclick={this.fetchImages} />}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img className="largeImage" src={largeImageURL} alt={description} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
