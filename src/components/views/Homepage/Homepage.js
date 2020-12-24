import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {UserContext} from '../../../data/userData';
import {AlertContext} from '../../../data/alertData';
import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import PromoProducts from '../../features/PromoProducts/PromoProductsContainer';

const Homepage = () => {
  const user = React.useContext(UserContext);
  const alert = React.useContext(AlertContext);
  const history = useHistory();
  const [confirmPremium, setConfirmPremium] = useState(false);

  const handleYes = () => {
    localStorage.setItem('isPremium', 'true');
    setConfirmPremium(false);
    return (
      setTimeout(()=> {
        alert.premiumAlert(`Congratulation ${user.userData}!`,
          <div className={styles.confirmPremium}>
            <h5>You are a Premium User now!</h5>
            <h5>Enjoy your new functionalities!</h5>
          </div>
        );
      },500)
    );
  };

  const handleNo = () => {
    alert.closeAlert();
  };

  const handleConfirm = () => {
    alert.closeAlert();
    setConfirmPremium(true);
    return (
      setTimeout(()=> {
        alert.premiumAlert('Confirmation',
          <div className={styles.confirmPremium}>
            <h5>Are you sure you want to become a premium user and start 2$/month subscription?</h5>
            <div>
              <button onClick={handleYes}>Yes</button>
              <button onClick={handleNo}>No</button>
            </div>
          </div>
        );
      },500)
    );
  };

  useEffect(()=> {
    if(history.location.pathname === '/' && user.isLogged && !user.isPremium){
      alert.premiumAlert(`Welcome ${user.userData}`,
        <div className={styles.premium}>
          <h5>Become a <span>premium user</span> and get access to special content today:</h5>
          <ul>
            <li>No more adverts on website!</li>
            <li>Special feature to compare products</li>
            <li>Priority in customer service</li>
            <li>...and much more!</li>
          </ul>
          <p>Just 2$ per month!</p>
          <button onClick={handleConfirm}>
            <h4>Become a special user with just one click!!!</h4>
          </button>
        </div>
      );
    }
  },[alert, alert.isLogged, handleConfirm, history.location.pathname, user.isLogged, user.isPremium, user.userData]);

  return (
    <div className={styles.root}>
      <PromoProducts />
      <NewFurniture />
      <Feedback />
      <FeatureBoxes />
    </div>
  );
};

export default Homepage;
