import React from 'react';
import PropTypes from 'prop-types';

import styles from './Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Stars = ({ rate, id, handleStar, handleStyle, starChange }) => {
  return (
    <div
      onClick={() => handleStyle({ id })}
      className={starChange ? styles.stars2 : styles.stars}
    >
      {[1, 2, 3, 4, 5].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <a key={star} href='/'>
            {star <= rate ? (
              <label>
                <input type='radio' name='rating' value={ratingValue} />
                <FontAwesomeIcon
                  onClick={() => handleStar({ id, ratingValue })}
                  onMouseEnter={() => handleStar({ id, ratingValue })}
                  onMouseLeave={() => handleStar({ id, ratingValue })}
                  className={styles.star}
                  icon={faStar}
                >
                  {star} stars
                </FontAwesomeIcon>
              </label>
            ) : (
              <label>
                <input type='radio' name='rating' value={ratingValue} />
                <FontAwesomeIcon
                  onClick={() => handleStar({ id, ratingValue })}
                  onMouseEnter={() => handleStar({ id, ratingValue })}
                  onMouseLeave={() => handleStar({ id, ratingValue })}
                  className={styles.star}
                  icon={farStar}
                >
                  {star} stars
                </FontAwesomeIcon>
              </label>
            )}
          </a>
        );
      })}
    </div>
  );
};

Stars.propTypes = {
  rate: PropTypes.number,
  id: PropTypes.string,
  handleStar: PropTypes.func,
  handleStyle: PropTypes.func,
  starChange: PropTypes.bool,
};

export default Stars;
