import React from 'react';
import styles from './Banner.module.scss';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const Banner = ({ description, bargain, home, furniture }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.bar}></div>
      <div className={styles.content}>
        <h1>{ReactHtmlParser(description)}</h1>
        <h2>{ReactHtmlParser(bargain)}</h2>
      </div>
      <div>
        <ul className={styles.breadcrumbs}>
          <li className={styles.item}>
            <a href='/' className={styles.link}>
              {home}
            </a>
          </li>
          <li className={styles.item}>
            <a href='/' className={styles.link_active}>
              {furniture}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

Banner.propTypes = {
  description: PropTypes.node,
  bargain: PropTypes.node,
  home: PropTypes.node,
  furniture: PropTypes.node,
};

export default Banner;
