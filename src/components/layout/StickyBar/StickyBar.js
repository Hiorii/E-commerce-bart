import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';

import styles from './StickyBar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const StickyBar = ({ products, handleRemove }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        {products.map(product => (
          <div
            key={product.id}
            className={`col-2 ${styles.photoWrapper}`}
            onClick={() => handleRemove(product.id)}
          >
            <div
              className={styles.photo}
              style={{
                backgroundImage: `url('${product.image}')`,
              }}
            ></div>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </div>
        ))}
        <div className='col-2'>
          {products.length < 2 ? '' : <Button variant='small'>Compare</Button>}
        </div>
      </div>
    </div>
  </div>
);

StickyBar.propTypes = {
  products: PropTypes.array,
  handleRemove: PropTypes.func,
};

export default StickyBar;
