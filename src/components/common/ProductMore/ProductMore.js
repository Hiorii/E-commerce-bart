import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductMore.module.scss';
import ProductReview from './ProductReview';

class ProductMore extends React.Component {
  state = {
    activeCart: 'reviews(0)',
  };

  handleCartChange(newCart) {
    this.setState({ activeCart: newCart });
  }

  render() {
    const { more } = this.props;
    const { activeCart } = this.state;
    let showCart;

    more.filter(item => {
      for (let key in item) {
        if (item[key].id === 'description' && item[key].id === this.state.activeCart) {
          showCart = <div> Description component to be displayed </div>;
          return showCart;
        } else if (
          item[key].id === 'reviews(0)' &&
          item[key].id === this.state.activeCart
        ) {
          showCart = <ProductReview />;
          return showCart;
        } else if (
          item[key].id === 'specification' &&
          item[key].id === this.state.activeCart
        ) {
          showCart = <div> Specification component to be displayed </div>;
          return showCart;
        } else if (
          item[key].id === 'custom tab' &&
          item[key].id === this.state.activeCart
        ) {
          showCart = <div> Custom Tab component to be displayed</div>;
          return showCart;
        }
      }
      return 0;
    });

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.wrapper}>
            <ul className={styles.list}>
              {more.map(item => {
                for (let key in item) {
                  const preparedClass =
                    item[key].id === activeCart ? styles.active : styles.item;
                  return (
                    <li
                      key={item[key].id}
                      className={preparedClass}
                      onClick={() => {
                        this.handleCartChange(item[key].id);
                      }}
                    >
                      {item[key].id}
                    </li>
                  );
                }
                return 0;
              })}
            </ul>
            {showCart}
          </div>
        </div>
      </div>
    );
  }
}

ProductMore.propTypes = {
  more: PropTypes.array.isRequired,
};

export default ProductMore;
