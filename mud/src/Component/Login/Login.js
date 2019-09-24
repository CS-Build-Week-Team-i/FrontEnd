import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/loginActions';
import './Login.scss';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
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

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
    // .then(this.props.history.push('/trips'));
    // this.props.history.push('/trips');
    // setTimeout(() => this.props.history.push('/trips'), 2000);
    // if (this.props.error !== '') {
    //   this.props.history.push('/trips');
    // }
  };

  render() {
    return (
      <div className='login-form'>
        {this.props.signupMsg && <h2>{this.props.signupMsg}</h2>}
        <form className='form' onSubmit={this.login}>
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
            name='password'
            placeholder='Password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <div className='flex-spacer' />
          {this.props.error && <p className='error'>{this.props.error}</p>}

          <button className='button'>
            {this.props.loggingIn ? (
              <Loader type='ThreeDots' color='white' height='12' width='26' />
            ) : (
              <span>Login</span>
            )}
          </button>
          <h2>
            Don't have an account?{' '}
            <Link className='link' to='/register'>
              Register
            </Link>
          </h2>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  error: state.loginReducer.error,
  loggingIn: state.loginReducer.loggingIn
});
export default connect(
  mapStateToProps,
  { login }
)(Login);
