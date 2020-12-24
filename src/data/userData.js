import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(localStorage.getItem('Username'));
  const [passwordData, setPasswordData] = useState(localStorage.getItem('Password'));
  const [isLogged, setIsLogged] = useState(JSON.parse(localStorage.getItem('isLogged')));
  const [isPremium, setIsPremium] = useState(JSON.parse(localStorage.getItem('isPremium')));

  return (
    <div>
      <UserContext.Provider
        value={{ userData, passwordData, setPasswordData, setIsLogged, isLogged, isPremium }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export default UserProvider;
