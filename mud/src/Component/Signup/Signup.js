import React from 'react';
import Loader from 'react-loader-spinner';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signup } from '../../actions/signupActions';
import '../Login/Login.scss';

class Signup extends React.Component {
  state = {
    credentials: {
      username: '',
      password1: '',
      password2: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    this.props
      .signup(this.state.credentials)
      .then(this.props.history.push('/login'));
    // setTimeout(() => this.props.history.push('/login'), 2000);
  };

  render() {
    return (
      <div className='login-form'>
        <form className='form' onSubmit={this.signup}>
          <h2>
            Already have an account? Click to {<Link to='/login'>Log in</Link>}
          </h2>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password1'
            placeholder='Password'
            value={this.state.credentials.password1}
            onChange={this.handleChange}
          />
          <label htmlFor='password'>Confrim Password</label>
          <input
            type='password'
            name='password2'
            placeholder='password'
            value={this.state.credentials.password2}
            onChange={this.handleChange}
          />
          <div className='flex-spacer' />
          {this.props.error && <p className='error'>{this.props.error}</p>}

          <button className='button'>
            {this.props.signingUp ? (
              <Loader type='ThreeDots' color='white' height='12' width='26' />
            ) : (
              <span>Sign Up</span>
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.signupReducer.error,
  signingUp: state.signupReducer.signingUp,
  signedUp: state.signupReducer.signedUp
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
