import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Header.module.scss';

import CompanyClaim from '../CompanyClaim/CompanyClaim';
import MenuBar from '../MenuBar/MenuBarContainer';

const Header = props => (
  <header className={styles.root}>
    <CompanyClaim />
    <MenuBar />
  </header>
);

// Header.propTypes = {};

export default Header;
