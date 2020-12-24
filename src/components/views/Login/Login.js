import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import styles from './Login.module.scss';
import PropTypes from 'prop-types';
import {UserContext} from '../../../data/userData';
import {AlertContext} from '../../../data/alertData';

const Login = () => {
  const user = React.useContext(UserContext);
  const alert = React.useContext(AlertContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginView, setLoginView] = useState(true);

  const history = useHistory();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginView = () => {
    setLoginView(!loginView);
  };

  const validate = () => {
    if(username === '') {
      alert.warningAlert('Warning!', `Username field can not be empty`);
    } else if(password === '') {
      alert.warningAlert('Warning!', `Password field can not be empty`);
    } else if(username !== user.userData) {
      alert.dangerAlert('oopss...', `Username ${username} does not exist`);
    } else if(password !== user.passwordData) {
      alert.dangerAlert('oopss...', 'Incorrect password');
    }
  };

  const handleLogin = e => {
    e.preventDefault();
    validate();
    if(username === user.userData && password === user.passwordData) {
      localStorage.setItem('isLogged', 'true');
      alert.successAlert('You are logged in', `Welcome ${username}`);
      setTimeout(()=> {
        history.push('/');
        alert.closeAlert();
        window.location.reload();
      },3000);
    }
  };

  const handleRegister = e => {
    e.preventDefault();
    validate();
    localStorage.setItem('Username',username);
    localStorage.setItem('Password',password);
    localStorage.setItem('isPremium', 'false');
    alert.successAlert('Account created', `You can log in now`);
    setTimeout(()=> {
      alert.closeAlert();
      window.location.reload();
    },3000);
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {loginView &&
        <h1>Login</h1>
        }
        {!loginView &&
        <h1>Register</h1>
        }
        <img src={process.env.PUBLIC_URL + '/images/user.png'} alt='login-img' />
        <Form >
          <div>
            <Input
              type='text'
              name='username'
              value={username}
              onChange={handleUsername}
              placeholder='Username'
            />
          </div>
          <div>
            <Input
              type='password'
              name='password'
              value={password}
              onChange={handlePassword}
              placeholder='Password'
            />
          </div>
          {!loginView &&
          <div>
            <button onClick={handleRegister}>
              <span>Register</span>
            </button>
          </div>
          }
          {loginView &&
          <div>
            <button onClick={handleLogin}>
              <span>Login</span>
            </button>
          </div>
          }
        </Form>
        {loginView &&
        <div className={styles.descrip}>
          <p>
            Do not have an account?
            <button
              className={styles.register}
              onClick={handleLoginView}
            >
              Register now!
            </button>
          </p>
        </div>
        }
        {!loginView &&
        <div className={styles.descrip}>
          <p>
            Do already have an account?
            <button
              className={styles.register}
              onClick={handleLoginView}
            >
              Login now!
            </button>
          </p>
        </div>
        }
      </div>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.any,
};

export default Login;
