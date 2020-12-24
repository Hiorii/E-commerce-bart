import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductSearch.module.scss';

const ProductSearch = ({ products }) => {
  const [display, setDisplay] = useState(false);
  const [displayFilter, setDisplayFilter] = useState(false);
  const [searchProduct, setSearchProduct] = useState([]);
  const [productCounter, setProductCounter] = useState(-1);
  const searchList = useRef(null);
  const searchItem = useRef(null);

  const showDisplay = e => {
    setDisplay(!display);
    moveUpAndDownOptions(e);
  };

  const showDisplayKey = e => {
    if (e.keyCode !== 40 && e.keyCode !== 38) {
      if (e.target.value.length >= 3) {
        setDisplayFilter(true);
        setDisplay(false);
      } else if (e.target.value.length < 3) {
        setDisplayFilter(false);
        setDisplay(false);
      }
    }

    if (e.target.value.includes(' ')) {
      let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(e.target.value)
      );
      setSearchProduct(filteredProducts);
    } else {
      let filteredProducts = products.filter(product =>
        product.name
          .toLowerCase()
          .replace(/\s/g, '')
          .includes(e.target.value)
      );
      setSearchProduct(filteredProducts);
    }
    moveUpAndDownOptions(e);
  };

  const moveUpAndDownOptions = e => {
    setProductCounter(-1);
    switch (e.keyCode) {
      case 38:
        setProductCounter(productCounter - 1);
        if (productCounter === 0) {
          setProductCounter(searchProduct.length);
        }
        break;
      case 40:
        setProductCounter(productCounter + 1);
        if (productCounter === searchProduct.length) {
          setProductCounter(0);
        }
        // console.log(e.target);
        // console.log(document.activeElement);
        // console.log(searchList.current);
        if (e.target === searchList.current) {
          e.target.focus();
          console.log('wow');
        }
        break;
    }
  };

  const closeSearchKey = e => {
    if (e.key === 'Escape') {
      setDisplay(false);
      setDisplayFilter(false);
    }
  };

  const closeSearchOutside = e => {
    if (searchList.current && !searchList.current.contains(e.target)) {
      setDisplay(false);
      setDisplayFilter(false);
    }
  };

  const onMouseOver = e => {
    if (searchItem.current && searchItem.current.contains(e.target)) {
      setProductCounter(-1);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeSearchKey);
    document.addEventListener('click', closeSearchOutside);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      document.removeEventListener('keydown', closeSearchKey);
      document.removeEventListener('click', closeSearchOutside);
      document.removeEventListener('mouseover', onMouseOver);
    };
  });

  return (
    <div className={styles.wrapper}>
      <form action='' className={styles.root}>
        <div className={styles.category}>
          <div className={styles.searchField}>
            <input
              ref={searchList}
              placeholder='Search products...'
              type='text'
              onFocus={e => showDisplay(e)}
              onKeyUp={e => showDisplayKey(e)}
            />
            <Button className={styles.searchButton}>
              <FontAwesomeIcon className={styles.icon} icon={faSearch} />
            </Button>
            {display && (
              <div className={styles.autoContainer} ref={searchItem}>
                {products.map((option, id) => {
                  return (
                    <div
                      key={id}
                      className={`${styles.option} ${
                        id === productCounter ? styles.test : ''
                      }`}
                    >
                      <Link
                        className={styles.link}
                        to={__dirname + `product/${option.id}`}
                      >
                        {option.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
            {displayFilter && (
              <div className={styles.autoContainer}>
                {searchProduct.map((product, id) => {
                  return (
                    <div
                      key={id}
                      className={`${styles.option} ${
                        id === productCounter ? styles.test : ''
                      }`}
                    >
                      <Link
                        className={`${styles.link} ${styles.testLink}`}
                        to={__dirname + `product/${product.id}`}
                      >
                        {product.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
  products: PropTypes.array,
};

export default ProductSearch;
