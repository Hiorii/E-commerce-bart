import React from 'react';
import PropTypes from 'prop-types';
import styles from './SortingFilters.module.scss';

const SortingFilter = ({ products, category, setCategoryProducts }) => {
  const sortProducts = e => {
    let sortedProducts;
    if (e.currentTarget.value === 'Name - A-Z') {
      sortedProducts = products
        .filter(item => item.category === category)
        .sort((a, b) => a.name.localeCompare(b.name));
    } else if (e.currentTarget.value === 'Name - Z-A') {
      sortedProducts = products
        .filter(item => item.category === category)
        .sort((a, b) => b.name.localeCompare(a.name));
    } else if (e.currentTarget.value === 'Price - Lowest to Highest') {
      sortedProducts = products
        .filter(item => item.category === category)
        .sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
    } else if (e.currentTarget.value === 'Price - Highest to Lowest') {
      sortedProducts = products
        .filter(item => item.category === category)
        .sort((a, b) => (a.price < b.price ? 1 : b.price < a.price ? -1 : 0));
    } else if (e.currentTarget.value === 'Avg. Customer Rating') {
      sortedProducts = products
        .filter(item => item.category === category)
        .sort((a, b) => (a.stars < b.stars ? 1 : b.stars < a.stars ? -1 : 0));
    } else {
      return null;
    }
    setCategoryProducts(sortedProducts);
  };

  return (
    <section className={styles.filters}>
      <div className={styles.filtersContainer}>
        <div className={styles.selectFilter}>
          <select defaultValue={'DEFAULT'} onChange={e => sortProducts(e)}>
            <option value='' disabled>
              Sort by
            </option>
            <option>Price - Lowest to Highest</option>
            <option>Price - Highest to Lowest</option>
            <option>Name - A-Z</option>
            <option>Name - Z-A</option>
            <option>Avg. Customer Rating</option>
          </select>
        </div>
      </div>
    </section>
  );
};

SortingFilter.propTypes = {
  products: PropTypes.array,
  category: PropTypes.string,
  categoryProducts: PropTypes.array,
  setCategoryProducts: PropTypes.func,
};

export default SortingFilter;
