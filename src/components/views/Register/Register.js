import React, { useState, useRef } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';
import styles from './Register.module.scss';
import AuthService from '../../../services/auth.service';

const required = value => {
  if (!value) {
    return <div>This field is required!</div>;
  }
};

const validEmail = value => {
  if (!isEmail(value)) {
    return <div>This is not a valid email.</div>;
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return <div>The username must be between 3 and 20 characters.</div>;
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return <div>The password must be between 6 and 40 characters.</div>;
  }
};

const Register = props => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState('');

  const onChangeUsername = e => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = e => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = e => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = e => {
    e.preventDefault();

    setMessage('');
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        response => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        error => {
          const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className={styles.root}>
      <div>
        <img src='//ssl.gstatic.com/accounts/ui/avatar_2x.png' alt='profile-img' />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div>
                <label htmlFor='username'>Username</label>
                <Input
                  type='text'
                  name='username'
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <Input
                  type='text'
                  name='email'
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <Input
                  type='password'
                  name='password'
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div>
                <button>Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div>
              <div>{message}</div>
            </div>
          )}
          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;
