import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Feedback.module.scss';

class Feedback extends React.Component {
  state = {
    activePage: 0,
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.activePage < 2) {
        this.setState({ activePage: this.state.activePage + 1 });
      } else {
        this.setState({ activePage: 0 });
      }
    }, 6000);
  }

  handlePageChange(e, i) {
    e.preventDefault();
    this.setState({ activePage: i });
  }

  render() {
    const { feedback, count } = this.props;
    const { activePage } = this.state;
    const item = feedback[this.state.activePage];

    const dots = [];
    for (let i = 0; i < count; i++) {
      dots.push(
        <li key={i}>
          <a
            href='/'
            onClick={e => this.handlePageChange(e, i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-12 ' + styles.heading}>
                <h3>Client feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
            <div key={item.id} className={'row justify-content-center ' + styles.item}>
              <div className='row justify-content-center'>
                <div className={'col-2 ' + styles.subitem}>
                  <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
                </div>
                <div className={'col-12 ' + styles.subitem}>{item.content}</div>
              </div>
              <div className={styles.clientData}>
                <img src={item.photo} alt='' />
                <div className={styles.clientName}>
                  <h3>{item.name}</h3>
                  <h4>{item.position}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
};

export default Feedback;
