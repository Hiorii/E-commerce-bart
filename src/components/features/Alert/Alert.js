import React, {useEffect,useRef} from 'react';
import styles from './Alert.module.scss';
import {AlertContext} from '../../../data/alertData';
import { FaRegWindowClose } from 'react-icons/fa';

const Alert = () => {
  const alertData = React.useContext(AlertContext);
  const alertCont = useRef(null);

  const close = () => {
    alertData.closeAlert();
  };

  useEffect(()=> {
    const handleClickOutside = (e) => {
      if (alertCont.current && !alertCont.current.contains(e.target)) {
        close();
      }
    };
    const handlePressEsc = (e) => {
      if(e.keyCode === 27) {
        close();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handlePressEsc);
    return ()=> {
      document.removeEventListener('mousedown',handleClickOutside);
      document.removeEventListener('keydown', handlePressEsc);
    };
  },[close]);

  return (
    <>
    {alertData.alert.isVisible &&
    <section className={styles.container}>
      <div
        ref={alertCont}
        className={`${styles.content} ${alertData.alert.type === 'success' ? styles.success
          :
          alertData.alert.type === 'warning' ? styles.warning
            :
            alertData.alert.type === 'danger' ? styles.danger
              : styles.premium
        }`}
      >
        <h3>{alertData.alert.title}</h3>
        <div>{alertData.alert.text}</div>
        <div className={styles.close}>
          <button onClick={close}>
            <FaRegWindowClose className={styles.icon} />
          </button>
        </div>
      </div>
    </section>
    }
    </>
  );
};

Alert.propTypes = {

};

export default Alert;
