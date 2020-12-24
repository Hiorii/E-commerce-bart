import React from 'react';
// import PropTypes from 'prop-types';
import styles from './CompanyClaim.module.scss';
import BurgerMenu from '../../features/BurgerMenu/BurgerMenuContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileAlt,
  faShoppingBasket,
  faUser,
  faSignOutAlt,
  faUserCog,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {UserContext} from '../../../data/userData';

const CompanyClaim = () => {
  const user = React.useContext(UserContext);
  const width = window.innerWidth;

  const handleLogout = () => {
    localStorage.setItem('isLogged', 'false');
  };

  return (
    <div className={styles.root}>
      <div className={`row align-items-center ${styles.compRow}`}>
        <div className={styles.burgerWrapper}>
          <Router>
            <BurgerMenu className={styles.burger} />
            <Switch>
              <Route path='/' />
            </Switch>
          </Router>
        </div>
        <div className={styles.logo}>
          <a href='/'>
            {width > 445 ? (
              <img src='/images/logo.png' alt='Bazar' />
            ) : (
              <img src='/images/logo2.png' alt='Bazar' />
            )}
          </a>
        </div>
        <div className={styles.empty}> </div>
        <div className={`col text-right ${styles.iconWrapper}`}>
          <div className={styles.icons}>
            <div>
              <ul className={styles.list}>
                <li>
                  <a href='/'>
                    <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} />{' '}
                    <span className={styles.topMenuText}>Contact</span>
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />{' '}
                    <span className={styles.topMenuText}>Cart</span>
                  </a>
                </li>
                {!user.isLogged &&
                <li>
                  <a href='/login'>
                    <FontAwesomeIcon className={styles.icon} icon={faUser} />
                    <span className={styles.topMenuText}>Login</span>
                  </a>
                </li>
                }
                {user.isLogged &&
                <>
                <li>
                  <a href='' onClick={handleLogout}>
                    <FontAwesomeIcon className={styles.icon} icon={faSignOutAlt} />
                    <span className={styles.topMenuText}>Logout</span>
                  </a>
                </li>
                <li>
                  <a href='/userpage'>
                    <FontAwesomeIcon className={styles.iconUserConf} icon={faUserCog} />
                    <span className={styles.topMenuText}>{user.userData}</span>
                    {user.isPremium &&
                    <FontAwesomeIcon className={styles.iconUserStar} icon={faStar} />
                    }
                  </a>
                </li>
                </>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CompanyClaim.propTypes = {};

export default CompanyClaim;
