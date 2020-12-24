import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AlertContext = React.createContext();

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    isVisible: false,
    title: '',
    text: '',
    type: '',
  });

  const successAlert = (title, text) => {
    setAlert({
      isVisible: true,
      title: title,
      text: text,
      type: 'success',
    });
  };

  const warningAlert = (title, text) => {
    setAlert({
      isVisible: true,
      title: title,
      text: text,
      type: 'warning',
    });
  };

  const dangerAlert = (title, text) => {
    setAlert({
      isVisible: true,
      title: title,
      text: text,
      type: 'danger',
    });
  };

  const premiumAlert = (title, text) => {
    setAlert({
      isVisible: true,
      title: title,
      text: text,
      type: 'premium',
    });
  };

  const closeAlert = () => {
    setAlert({
      isVisible: false,
      text: '',
      type: '',
    });
  };

  return (
    <div>
      <AlertContext.Provider
        value={{ alert, successAlert, warningAlert, dangerAlert, closeAlert, premiumAlert }}
      >
        {children}
      </AlertContext.Provider>
    </div>
  );
};

AlertProvider.propTypes = {
  children: PropTypes.node,
};

export default AlertProvider;
