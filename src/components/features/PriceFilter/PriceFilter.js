import React from 'react';
import PropTypes from 'prop-types';
import styles from './PriceFilter.module.scss';

const PriceFilter = ({
  products,
  category,
  getProductByPrice,
  setCategoryProducts,
  setPriceValuesTo,
  setPriceValuesFrom,
}) => {
  const handlePriceTo = e => {
    setCategoryProducts(products.filter(item => item.category === category));
    if (e.target.value.length === 0) {
      setTimeout(() => {
        setPriceValuesTo(Math.max(...getProductByPrice));
      }, 500);
    }
    if (e.target.value.length !== 0) {
      e.persist();
      setTimeout(() => {
        setPriceValuesTo(parseInt(e.target.value));
      }, 500);
    }
  };

  const handlePriceFrom = e => {
    setCategoryProducts(products.filter(item => item.category === category));
    if (e.target.value.length === 0) {
      setTimeout(() => {
        setPriceValuesFrom(0);
      }, 500);
    }
    if (e.target.value.length !== 0) {
      e.persist();
      setTimeout(() => {
        setPriceValuesFrom(parseInt(e.target.value));
      }, 500);
    }
  };

  return (
    <div className={styles.root}>
      <h3 className={styles.header}> Filter by Price </h3>
      <form>
        <input type='text' placeholder='from' onChange={handlePriceFrom} />
        <div>-</div>
        <input type='text' placeholder='to' onChange={handlePriceTo} />
      </form>
    </div>
  );
};

PriceFilter.propTypes = {
  products: PropTypes.array,
  getProductByPrice: PropTypes.array,
  category: PropTypes.string,
  setCategoryProducts: PropTypes.func,
  setPriceValuesTo: PropTypes.func,
  setPriceValuesFrom: PropTypes.func,
};

export default PriceFilter;
