import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Sale.module.scss';
import { FaRegWindowClose } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const Sale = ({ saleContent, saleFeedback }) => {
  const [sale, setSale] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [timer, setTimer] = useState(5);
  const randomSale = saleContent[Math.floor(Math.random() * saleContent.length)];
  const ref = useRef(null);
  const close = useRef(null);
  const history = useHistory();

  history.listen(() => {
    let time;
    const rand = Math.floor(Math.random() * 3) + 1;
    if (rand === 1) {
      time = setTimeout(() => {
        setSale(true);
      }, 2500);
    }
    return () => clearTimeout(time);

  });

  const closeSale = () => {
    setSale(false);
  };

  const closeSaleKey = e => {
    if (e.key === 'Escape') {
      setSale(false);
    }
  };

  const closeSaleOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setSale(!sale);
    }
  };

  const moveToProduct = e => {
    if (ref.current.contains(e.target) && !close.current.contains(e.target)) {
      setSale(false);
      setFeedback(true);
    }
  };
  useEffect(() => {
    let interval = null;
    if (feedback) {
      setTimeout(() => {
        setFeedback(false);
        setTimer(5);
      }, 5000);
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else if (!feedback && timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [feedback, timer]);

  useEffect(() => {
    document.addEventListener('keydown', closeSaleKey);
    document.addEventListener('click', closeSaleOutside);
    return () => {
      document.removeEventListener('keydown', closeSaleKey);
      document.removeEventListener('click', closeSaleOutside);
    };
  });

  return sale ? (
    <div key={randomSale.id} className={styles.root}>
      <div ref={ref} className={styles.main} onClick={moveToProduct}>
        <div key={randomSale.id} className={styles.saleContainer}>
          <img src={randomSale.img} alt='' />
          <div className={styles.saleContent}>
            <h1>{randomSale.title}</h1>
            <h2>{randomSale.subtitle}</h2>
            <h4>{randomSale.promo}</h4>
            <div className={styles.reduce}>
              <span>{randomSale.reduce}</span>
            </div>
          </div>
          <div ref={close} className={styles.close}>
            <button onClick={closeSale}>
              <FaRegWindowClose className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    feedback && (
      <div key={saleFeedback.id} className={styles.root}>
        <div className={styles.main}>
          <div className={styles.saleContainer}>
            <img src={saleFeedback.img} className={styles.imgFeedback} alt='' />
            <div className={styles.saleContent}>
              <h1>{saleFeedback.title}</h1>
              <h2>{saleFeedback.subtitle}</h2>
              <h4>
                {saleFeedback.promo} in
                <span className={styles.timer}>{timer}...</span>
              </h4>
              <div className={styles.reduce}>
                <span>{saleFeedback.reduce}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

Sale.propTypes = {
  saleContent: PropTypes.array,
  saleFeedback: PropTypes.object,
};

export default Sale;
