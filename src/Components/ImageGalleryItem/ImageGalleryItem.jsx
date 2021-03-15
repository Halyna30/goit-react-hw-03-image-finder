import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => (
  <li className={s.imageGalleryItem}>
    <img
      src={webformatURL}
      alt={tags}
      data-largeimage={largeImageURL}
      className={s.imageGalleryItemImg}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
