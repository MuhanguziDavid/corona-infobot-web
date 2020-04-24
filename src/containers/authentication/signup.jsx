import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { publicPostData } from '../../redux/middlewares';
import SignupForm from '../../components/authentication/signup';
import { signupAction } from '../../redux/actions/authentication';


export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirm_password: '',
      isLoading: false,
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  toggleState = (name, value) => {
    this.setState({ [name]: !value });
  }

  handleSubmit = async (event) => {
    this.toggleState('isLoading', this.state.isLoading);
    event.preventDefault();
    const { publicPostData } = this.props;
    const { firstName, lastName, email, password } = this.state;

    const data = { firstName, lastName, email, password };

    const response = await publicPostData('/createUser/', signupAction, 'post', data);
    // eslint-disable-next-line no-unused-expressions
    response && response.error && (
      toast.dismiss(),
      toast.error(`Signup failed: ${response.error.message}`, { autoClose: false, hideProgressBar: true }),
      this.toggleState('isLoading', this.state.isLoading)
    );
    // eslint-disable-next-line no-unused-expressions
    response && response.data && (
      toast.dismiss(),
      toast.success('Signup successful', { autoClose: 3500, hideProgressBar: false }),
      this.toggleState('isLoading', this.state.isLoading),
      this.props.history.push('/login')
    );
  }

  render() {
    const { firstName, lastName, email, password, confirm_password, isLoading, } = this.state;
    return (
      <SignupForm
        handleChange={this.handleChange}
        handleChangeDate={this.handleChangeDate}
        handleSubmit={this.handleSubmit}
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        confirm_password={confirm_password}
        isLoading={isLoading}
      />
    )
  }
}

const matchDispatchToProps = (dispatch) => bindActionCreators({signupAction, publicPostData}, dispatch);

const mapStateToProps = state => {
  return {
    signupSuccess: state.signupReducer.signupSuccess,
    signupError: state.signupReducer.error,
  };
};

Signup.propTypes = {
  signupSuccess: PropTypes.object,
  signupAction: PropTypes.func.isRequired,
  publicPostData: PropTypes.func.isRequired,
};

Signup.defaultProps = {
  signupSuccess: {},
};

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Signup);
