import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CompanyFilter.module.scss';

const CompanyFilter = ({
  products,
  category,
  companies,
  setCategoryProducts,
  setCompanyValues,
  setInitializer,
  initializer,
}) => {
  const [filteredCompany, setFilteredCompany] = useState([]);

  const noDuplicateCompanies = {};
  for (let i = 0; i < companies.length; i++) {
    noDuplicateCompanies[companies[i]] = (noDuplicateCompanies[companies[i]] || 0) + 1;
  }

  const uniqueCompany = [];
  for (let key in noDuplicateCompanies) {
    const productByManufacturer = products.filter(product => {
      return product.manufacturer === key && product.category === category;
    });
    uniqueCompany.push({
      name: key,
      amount: productByManufacturer.length,
    });
  }

  const handleChange = e => {
    setInitializer(!initializer);
    setCategoryProducts(products.filter(item => item.category === category));
    if (e.target.checked) {
      if (filteredCompany.indexOf(e.target.name) === -1) {
        filteredCompany.push(e.target.name);
        setCompanyValues(filteredCompany);
      }
    } else {
      if (filteredCompany.indexOf(e.target.name) > -1) {
        const index = filteredCompany.indexOf(e.target.name);
        filteredCompany.splice(index, 1);
        setCompanyValues(filteredCompany);
      }
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h3 className={styles.header}> Filter by Company </h3>
        <form className={styles.list}>
          {uniqueCompany.map((company, index) => {
            return (
              <div key={index}>
                <input
                  type='checkbox'
                  id={company.name}
                  name={company.name}
                  //checked={products[company.name]}
                  onChange={e => handleChange(e)}
                />
                <label htmlFor={company.name}>
                  {company.name} <span>({company.amount})</span>
                </label>
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};

CompanyFilter.propTypes = {
  products: PropTypes.array,
  category: PropTypes.string,
  companies: PropTypes.array,
  setCategoryProducts: PropTypes.func,
  setCompanyValues: PropTypes.func,
  initializer: PropTypes.bool,
  setInitializer: PropTypes.func,
};

export default CompanyFilter;
