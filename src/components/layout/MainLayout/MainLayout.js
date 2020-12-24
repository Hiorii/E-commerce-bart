import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import StickyBar from '../StickyBar/StickyBarContainer';
import Sale from '../../common/Sale/SaleContainer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <StickyBar />
      <Footer />
      <Sale />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
