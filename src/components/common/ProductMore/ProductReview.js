import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductReview.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const ProductReview = ({ rate = 4 }) => (
  <div className={styles.root}>
    <p>There are no reviews on this product</p>
    <Button className={styles.buttonAdd}> Add a review </Button>
    <p className={styles.ratingText}>Your Rating</p>
    <div className={styles.rating}>
      <span>Bad</span>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(star => {
          return (
            <a key={star} href='/'>
              {star <= rate ? (
                <label>
                  <input type='radio' name='rating' />
                  <FontAwesomeIcon className={styles.star} icon={faStar}>
                    {star} stars
                  </FontAwesomeIcon>
                </label>
              ) : (
                <label>
                  <input type='radio' name='rating' />
                  <FontAwesomeIcon className={styles.star} icon={farStar}>
                    {star} stars
                  </FontAwesomeIcon>
                </label>
              )}
            </a>
          );
        })}
      </div>
      <span>Good</span>
    </div>
    <form>
      <label htmlFor='more'> Your Review </label>
      <textarea
        className={styles.textarea}
        id='more'
        name='more'
        rows='5'
        placeholder=''
      />
      <div className={styles.inputs}>
        <input type='text' placeholder='Name*' />
        <input type='email' placeholder='Email*' />
        <Button className={styles.continue}>Continue</Button>
      </div>
    </form>
  </div>
);

ProductReview.propTypes = {
  rate: PropTypes.number,
};

export default ProductReview;
