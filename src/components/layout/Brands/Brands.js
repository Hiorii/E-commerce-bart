import React from 'react';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';
import Swipe from 'react-easy-swipe';

class Brands extends React.Component {
  state = {
    margin: -1250,
  };

  handleLeftSlide(margin) {
    const boxSize = 124;
    this.setState({ margin: margin - boxSize * 4 });
    if (margin <= -2242) {
      this.setState({ margin: margin - boxSize * 2 });
    }
    if (margin <= -2342) {
      this.setState({ margin: -2820 });
    }
  }

  handleRightSlide(margin) {
    const boxSize = 124;
    this.setState({ margin: margin + boxSize * 4 });
    if (margin >= -258) {
      this.setState({ margin: margin + 258 });
    }
    if (margin >= 0) {
      this.setState({ margin: 0 });
    }
  }

  render() {
    const { brands } = this.props;

    return (
      <Swipe
        onSwipeLeft={() => this.handleLeftSlide(this.state.margin)}
        onSwipeRight={() => this.handleRightSlide(this.state.margin)}
      >
        <div className={styles.root}>
          <div className='container'>
            <div className={'row align-items-center ' + styles.wrapper}>
              <Button
                className={styles.button}
                onClick={() => this.handleLeftSlide(this.state.margin)}
              >
                <span className={styles.arrow}> &lt; </span>
              </Button>
              <div className={styles.brandsParent}>
                <div
                  className={styles.brandsChild}
                  style={{ marginLeft: this.state.margin }}
                >
                  {brands.map(brand => {
                    return (
                      <div
                        className={styles.image}
                        key={brand.id.replace('Brand-', '')}
                      >
                        <img src={brand.image} alt={brand.id} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <Button
                className={styles.button + ' ' + styles.buttonTwo}
                onClick={() => this.handleRightSlide(this.state.margin)}
              >
                <span className={styles.arrow}> &gt; </span>
              </Button>
            </div>
          </div>
        </div>
      </Swipe>
    );
  }
}

Brands.propTypes = {
  map: PropTypes.func,
  brands: PropTypes.array,
};

export default Brands;
