import React from 'react';
import PropTypes from 'prop-types';
import styles from './RatingFilters.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const RatingFilters = ({
  products,
  category,
  setCategoryProducts,
  setRatingValues,
  setInitializer,
  initializer,
}) => {
  const handleStarRating = rating => {
    setInitializer(!initializer);
    setRatingValues(rating);
    setCategoryProducts(products.filter(item => item.category === category));
  };

  return (
    <div className={styles.root}>
      <h3 className={styles.header}> Avg. Customer Rating </h3>
      <div className={styles.starsContainer}>
        <div className={styles.starsContainerInner} onClick={() => handleStarRating(4)}>
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <span>& Up</span>
        </div>
        <div className={styles.starsContainerInner} onClick={() => handleStarRating(3)}>
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <span>& Up</span>
        </div>
        <div className={styles.starsContainerInner} onClick={() => handleStarRating(2)}>
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <span>& Up</span>
        </div>
        <div className={styles.starsContainerInner} onClick={() => handleStarRating(1)}>
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <span>& Up</span>
        </div>
      </div>
    </div>
  );
};

RatingFilters.propTypes = {
  products: PropTypes.array,
  getProductByPrice: PropTypes.array,
  category: PropTypes.string,
  setCategoryProducts: PropTypes.func,
  setRatingValues: PropTypes.func,
  initializer: PropTypes.bool,
  setInitializer: PropTypes.func,
};

export default RatingFilters;
