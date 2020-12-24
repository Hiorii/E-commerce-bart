import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import CompanyFilter from '../../features/CompanyFilter/CompanyFilterContainer';
import PriceFilter from '../../features/PriceFilter/PriceFilterContainer';
import SortingFilter from '../../features/SortingFilter/SortingFilter';
import RatingFilters from '../../features/RatingFilter/RatingFilter';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Brands from '../../layout/Brands/BrandsContainer';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import { useHistory } from 'react-router-dom';

const ProductList = ({ products, getProductByPrice }) => {
  const [category, setCategory] = useState(window.location.pathname.split('/')[2]);
  const [categoryProducts, setCategoryProducts] = useState(
    products.filter(item => item.category === category)
  );
  const [companyValues, setCompanyValues] = useState([]);
  const [ratingValues, setRatingValues] = useState(0);
  const [priceValuesTo, setPriceValuesTo] = useState(Math.max(...getProductByPrice));
  const [priceValuesFrom, setPriceValuesFrom] = useState(0);
  const [initializer, setInitializer] = useState(false);

  const history = useHistory();
  const initialLoad = useRef(false);

  history.listen(() => {
    setCategory(window.location.pathname.split('/')[2]);
    setCategoryProducts(products.filter(item => item.category === category));
  });

  if (companyValues.length === 0) {
    setCompanyValues(['Apple', 'Samsung', 'Motorola', 'Xiaomi', 'Huawei']);
  }

  useEffect(() => {
    if (initialLoad.current) {
      const filteredProduct = categoryProducts.filter(product => {
        return (
          product.stars >= ratingValues &&
          companyValues.includes(product.manufacturer) &&
          product.price >= priceValuesFrom &&
          product.price <= priceValuesTo
        );
      });
      setCategoryProducts(filteredProduct);
    } else {
      initialLoad.current = true;
    }
  }, [priceValuesFrom, priceValuesTo, initializer, categoryProducts, ratingValues, companyValues]);

  return (
    <div className={styles.root}>
      <Grid>
        <Row>
          <SortingFilter
            products={products}
            category={category}
            categoryProducts={categoryProducts}
            setCategoryProducts={setCategoryProducts}
          />
        </Row>
        <Row>
          <Col md={8} lg={9} className={styles.content}>
            <div className={styles.leftColumn}>
              <div className='col-12'>
                {categoryProducts.length > 0 &&
                  categoryProducts.map(item => {
                    return (
                      <div key={item.id}>
                        <ProductBox {...item} />
                      </div>
                    );
                  })}
                {categoryProducts.length <= 0 && (
                  <div className={styles.noProduct}>
                    <p>No product available in given criteria. Please search again.</p>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col xs md={4} lg={3} className={styles.filters}>
            <div className={styles.rightColumn}>
              <CompanyFilter
                setCompanyValues={setCompanyValues}
                category={category}
                setCategoryProducts={setCategoryProducts}
                companyValues={companyValues}
                setInitializer={setInitializer}
                initializer={initializer}
              />
              <PriceFilter
                setPriceValuesTo={setPriceValuesTo}
                setPriceValuesFrom={setPriceValuesFrom}
                category={category}
                setCategoryProducts={setCategoryProducts}
              />
              <RatingFilters
                setRatingValues={setRatingValues}
                products={products}
                category={category}
                setCategoryProducts={setCategoryProducts}
                setInitializer={setInitializer}
                initializer={initializer}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Brands />
        </Row>
      </Grid>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  getProductByPrice: PropTypes.array,
};

export default ProductList;
