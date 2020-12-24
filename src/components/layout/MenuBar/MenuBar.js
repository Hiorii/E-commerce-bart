import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductSearch from '../../features/ProductSearch/ProductSearchContainer';
import styles from './MenuBar.module.scss';

const MenuBar = ({ children, categories }) => {
  const [activeBar, setActiveBar] = useState('');
  let history = useHistory();

  const handleActiveClass = (e, id) => {
    e.preventDefault();
    setActiveBar(id);
    id ? history.push(`/shop/${id}`) : history.push('/');
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className={`col ${styles.search}`}>
            <ProductSearch />
          </div>
          <div className={'col-auto ' + styles.menu}>
            <ul>
              <li>
                <a
                  className={!activeBar ? styles.active : ''}
                  onClick={(e, id) => handleActiveClass(e, id)}
                >
                  Home
                </a>
              </li>
              {categories.map(item => {
                return (
                  <li key={item.id}>
                    <a
                      className={activeBar === item.id ? styles.active : ''}
                      onClick={e => handleActiveClass(e, item.id)}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.array,
};

export default MenuBar;
