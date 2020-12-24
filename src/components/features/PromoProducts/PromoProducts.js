import React from 'react';
import PropTypes from 'prop-types';
import PromoProductBox from '../../common/PromoProductBox/PromoProductBoxContainer';
import Button from '../../common/Button/Button';
import styles from './PromoProducts.module.scss';

class PromoProducts extends React.Component {
  state = {
    activeCategory: 'laptop',
    activeImage: 1,
    activeCategoryArr: ['laptop', 'mouse', 'keyboard'],
    fadeRight: true,
    fadeLeft: true,
    index: 0,
    interval: null,
    timeout: null,
  };
  /* -------------------- LEFT CONTAINER -------------------- */
  componentDidMount() {
    this.intervalTimer();
  }

  intervalTimer = () => {
    this.setState({ index: this.state.index === 0 ? 1 : 2 });
    this.setState({ interval: setInterval(this.startAnimationSlide, 4000) });
  };

  stopIntervalTimer() {
    clearInterval(this.state.interval);
  }

  timeOutTimer() {
    this.setState({ timeout: setTimeout(this.intervalTimer, 10000) });
  }

  stopTimeOutTimer() {
    clearTimeout(this.state.timeout);
  }

  startAnimationSlide = () => {
    this.handleFadeInLeft();
    setTimeout(() => {
      this.handleFadeOutLeft();
    }, 2000);
    this.setState({
      activeCategory: this.state.activeCategoryArr[
        this.state.index++ % this.state.activeCategoryArr.length
      ],
    });
  };

  stopAnimationSlide() {
    this.stopTimeOutTimer();
    this.stopIntervalTimer();
    this.timeOutTimer();
  }

  handleCategoryChange(e, categoryId) {
    e.preventDefault();
    if (categoryId !== this.state.activeCategory) {
      this.handleFadeInLeft();
    }
    this.setState({ activeCategory: categoryId });
    this.stopAnimationSlide(categoryId);
  }

  handleFadeOutLeft() {
    this.setState({ fadeLeft: false });
  }

  handleFadeInLeft() {
    this.setState({ fadeLeft: true });
  }

  /* -------------------- RIGHT CONTAINER -------------------- */
  handleImageLeft(e, imageId) {
    e.preventDefault();
    this.handleFadeOutRight();
    setTimeout(() => {
      if (imageId === 1) {
        this.setState({ activeImage: 3 });
        this.handleFadeInRight();
      } else {
        this.setState({ activeImage: imageId - 1 });
        this.handleFadeInRight();
      }
    }, 1000);
  }

  handleImageRight(e, imageId) {
    e.preventDefault();
    this.handleFadeOutRight();
    setTimeout(() => {
      if (imageId === 3) {
        this.setState({ activeImage: 1 });
        this.handleFadeInRight();
      } else {
        this.setState({ activeImage: imageId + 1 });
        this.handleFadeInRight();
      }
    }, 1000);
  }
  handleFadeOutRight() {
    this.setState({ fadeRight: false });
  }

  handleFadeInRight() {
    this.setState({ fadeRight: true });
  }

  render() {
    const { hotDeal, name, spanName, subName, images, promoCategory } = this.props;
    const { activeCategory, activeImage, fadeRight, fadeLeft } = this.state;
    const categoryProduct = hotDeal.filter(item => item.category === activeCategory);
    const currentImage = images.filter(item => item.id === activeImage);
    const helpClass = fadeLeft ? styles.fadeIn : styles.fadeOut;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={`row + ${styles.row}`}>
            <div className={`col-5 ${styles.leftContainer}`}>
              <div className={styles.hotDealsContainer}>
                <div className='col-8'>
                  <h5>hot deals</h5>
                </div>
                <div className={`col-5 ${styles.dots}`}>
                  <ul>
                    {promoCategory.map((item, id) => {
                      const preparedClass =
                        item.category === activeCategory ? styles.active : '';
                      return (
                        <li key={id}>
                          <a
                            href='/'
                            onClick={e => this.handleCategoryChange(e, item.category)}
                            className={preparedClass}
                          >
                            page {id}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              {categoryProduct.map(item => (
                <div
                  key={item.id}
                  className={`col-12 ${styles.promoBoxContainer} ${helpClass}`}
                  onMouseEnter={e => this.handleCategoryChange(e, activeCategory)}
                >
                  <PromoProductBox {...item} />
                </div>
              ))}
            </div>
            <div className={`col-6 ${styles.rightContainer}`}>
              {currentImage.map((item, id) => (
                <img
                  key={id}
                  src={item.image}
                  alt={item.imageAlt}
                  className={fadeRight ? styles.fadeInRight : styles.fadeOutRight}
                />
              ))}
              <div className='row'>
                <div className={styles.rightContainerMain}>
                  <div className={styles.description}>
                    <h2>
                      {`${name} `}
                      <span>{spanName} </span>
                    </h2>
                    <p>{subName}</p>
                    <Button className={styles.promoBtn}>shop now</Button>
                  </div>
                </div>
              </div>
              {currentImage.map((item, id) => (
                <div className={`row ${styles.navigation}`} key={id}>
                  <div
                    className={`col-6 ${styles.navigationLeft}`}
                    onClick={e => this.handleImageLeft(e, activeImage)}
                  >
                    <a href='/'>
                      <i className='fas fa-chevron-left'></i>
                    </a>
                  </div>
                  <div
                    className={`col-6 ${styles.navigationRight}`}
                    onClick={e => this.handleImageRight(e, activeImage)}
                  >
                    <a href='/'>
                      <i className='fas fa-chevron-right'></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PromoProducts.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  promoCategory: PropTypes.array,
  hotDeal: PropTypes.array,
  name: PropTypes.string,
  spanName: PropTypes.string,
  subName: PropTypes.string,
  images: PropTypes.array,
};

PromoProducts.defaultProps = {
  categories: [],
  products: [],
};

export default PromoProducts;
