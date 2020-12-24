import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import Button from '../../common/Button/Button';
import Stars from '../../common/Stars/StarsContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faShoppingBasket,
  faHeart,
  faExchangeAlt,
  faEnvelope,
  faMinus,
  faPlus,
  faExpandAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import ProductMore from '../../common/ProductMore/ProductMoreContainer';

const ProductPage = ({
  image,
  name,
  stars,
  price,
  olderPrice,
  overview,
  quantity,
  category,
  manufacturer,
}) => {
  var availability = 'Unavailable';
  if (quantity > 0) {
    availability = 'In Stock';
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col ' + styles.heading}>
              <h3>{category}</h3>
            </div>
            <div className={'col-auto ' + styles.nav}>
              <p>
                Home {'>'} Furniture {'>'} Chair
              </p>
            </div>
          </div>
        </div>
        <div className={styles.productBox}>
          <div className='row'>
            <div className='col-5'>
              <div className='row'>
                <div
                  className={styles.photo}
                  style={{
                    backgroundImage: `url('${image}')`,
                  }}
                >
                  <Button variant='outlineYellow' className={styles.expand}>
                    <FontAwesomeIcon icon={faExpandAlt}></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
              <div className={'row ' + styles.mini}>
                <Button variant='outlineYellow' className={styles.left}>
                  <FontAwesomeIcon icon={faChevronLeft}>Favorite</FontAwesomeIcon>
                </Button>
                <Button variant='outlineYellow' className={styles.right}>
                  <FontAwesomeIcon icon={faChevronRight}>Favorite</FontAwesomeIcon>
                </Button>
                <div className='col-2'>
                  <div
                    className={styles.photo}
                    style={{
                      backgroundImage: `url('${image}')`,
                    }}
                  ></div>
                </div>
                <div className='col-2'>
                  <div
                    className={styles.photo}
                    style={{
                      backgroundImage: `url('${image}')`,
                    }}
                  ></div>
                </div>
                <div className='col-2'>
                  <div
                    className={styles.photo}
                    style={{
                      backgroundImage: `url('${image}')`,
                    }}
                  ></div>
                </div>
                <div className='col-2'>
                  <div
                    className={styles.photo}
                    style={{
                      backgroundImage: `url('${image}')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className='col-7'>
              <div className={styles.section}>
                <div className='row'>
                  <div className='col'>
                    <h5>{name}</h5>
                    <p>From {manufacturer}</p>
                  </div>
                  <div className='col-auto'>
                    <Button variant='outlineYellow'>
                      <FontAwesomeIcon icon={faChevronLeft}>Favorite</FontAwesomeIcon>
                    </Button>
                    <Button variant='outlineYellow'>
                      <FontAwesomeIcon icon={faChevronRight}>Favorite</FontAwesomeIcon>
                    </Button>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className={styles.review}>
                      <Stars rate={stars} handleStar={() => {}} />
                      <p>(0 reviews)</p>
                      <p>Add your review</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.section}>
                <div className='row justify-content-start'>
                  <div className={'col-2 ' + styles.olderPrice}>{olderPrice}</div>
                  <div className={'col-2 ' + styles.price}>{price}</div>
                </div>
              </div>
              <div className={styles.section}>
                <div className='row'>
                  <div className='col'>
                    <div className={styles.buttons}>
                      <Button variant='outlineYellow'>
                        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD
                        TO CART
                      </Button>
                      <Button variant='outlineYellow'>
                        <FontAwesomeIcon icon={faHeart} />
                      </Button>
                      <Button variant='outlineYellow'>
                        <FontAwesomeIcon icon={faExchangeAlt} />
                      </Button>
                      <Button variant='outlineYellow'>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <div className={styles.quantity}>
                      <p>Quantity</p>
                      <input
                        className={styles.inputSmall}
                        type='number'
                        defaultValue='2'
                      ></input>
                      <Button variant='outlineYellow'>
                        <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                      </Button>
                      <Button variant='outlineYellow'>
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.section}>
                <div className='row'>
                  <div className='col'>
                    <p>
                      <span>Quick Overview</span>
                      <br />
                      {overview}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.section}>
                <div className='row'>
                  <div className='col-2'>
                    <p>
                      <span>Availability:</span>
                    </p>
                  </div>
                  <div className='col-2'>
                    <p> {availability} </p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-2'>
                    <p>
                      <span>Category:</span>
                    </p>
                  </div>
                  <div className='col-2'>
                    <p> {category} </p>
                  </div>
                </div>
              </div>
              <div className={styles.section}>
                <div className='row'>
                  <div className='col'>
                    <div className={styles.social}>
                      <Button variant='outlineFacebook'>
                        <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>Share
                      </Button>
                      <Button variant='outlineGoogle'>
                        <FontAwesomeIcon
                          icon={faGooglePlusG}
                          className={styles.googleplus}
                        ></FontAwesomeIcon>{' '}
                        Google+
                      </Button>
                      <Button variant='outlineTwitter'>
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className={styles.twitter}
                        ></FontAwesomeIcon>{' '}
                        Tweet
                      </Button>
                      <Button variant='outlinePinterest'>
                        <FontAwesomeIcon
                          icon={faPinterestP}
                          className={styles.pinterest}
                        ></FontAwesomeIcon>{' '}
                        Pinterest
                      </Button>
                      <Button variant='outlineLinkedIn'>
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          className={styles.linkedin}
                        ></FontAwesomeIcon>{' '}
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductMore />
    </div>
  );
};

ProductPage.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  olderPrice: PropTypes.string,
  overview: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
};

export default ProductPage;
