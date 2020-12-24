import React from 'react';
import Swipe from 'react-easy-swipe';
import PropTypes from 'prop-types';
import Brands from '../../layout/Brands/Brands';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'laptop',
    fadeTrue: true,
  };

  handlePageChange(e, newPage) {
    e.preventDefault();
    this.setState({ activePage: newPage });
  }

  handleFadeOut(e, newCategory) {
    e.preventDefault();
    this.setState({ fadeTrue: false });
    setTimeout(() => {
      this.handleFadeIn(newCategory);
    }, 2000);
  }

  handleFadeIn(newCategory) {
    this.setState({ fadeTrue: true });
    this.setState({ activeCategory: newCategory });
  }

  handleRightSwipe() {
    if (this.state.activePage >= 1) {
      this.handlePageChange(this.state.activePage - 1);
    }
  }

  handleLeftSwipe(pagesCount) {
    if (this.state.activePage < pagesCount - 1) {
      this.handlePageChange(this.state.activePage + 1);
    }
  }

  render() {
    const { categories, products, brands } = this.props;
    const { activeCategory, activePage, fadeTrue } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      const preparedClass = i === activePage ? styles.active : '';
      dots.push(
        <li key={i}>
          <a
            href='/'
            onClick={e => this.handlePageChange(e, i)}
            className={preparedClass}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div>
        <Swipe
          onSwipeLeft={() => this.handleLeftSwipe(pagesCount)}
          onSwipeRight={() => this.handleRightSwipe()}
        >
          <div className={styles.root}>
            <div className='container'>
              <div className={styles.panelBar}>
                <div className='row no-gutters align-items-end'>
                  <div className={'col-auto ' + styles.heading}>
                    <h3>New furniture</h3>
                  </div>
                  <div className={'col ' + styles.menu}>
                    <ul>
                      {categories.map(item => {
                        const preparedClass =
                          item.id === activeCategory ? styles.active : '';
                        return (
                          <li key={item.id}>
                            <a
                              href='/'
                              className={preparedClass}
                              onClick={e => this.handleFadeOut(e, item.id)}
                            >
                              {item.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className={'col-auto ' + styles.dots}>
                    <ul>{dots}</ul>
                  </div>
                </div>
              </div>
              <div className='row'>
                {categoryProducts
                  .slice(activePage * 8, (activePage + 1) * 8)
                  .map(item => (
                    <div
                      key={item.id}
                      className={`col-3 ${fadeTrue ? styles.fadeIn : styles.fadeOut}`}
                    >
                      <ProductBox {...item} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Swipe>
        <Brands brands={brands} />
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),

  brands: PropTypes.array,
  changeFade: PropTypes.func,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
