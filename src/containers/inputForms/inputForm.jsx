import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { privateDataFetch, privatePostData } from '../../redux/middlewares';
import DashboardComponent from '../../components/dashboard';
import { fetchTreesAction, openTreeAction } from '../../redux/actions/trees';


export class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      type: '',
      amount: '',
      isLoading: false
    };
  }

  componentDidMount () {
    this.getTrees();
  }

  toggleState = (name, value) => {
    this.setState({ [name]: !value });
  }

  getTrees = async () => {
    this.toggleState('isLoading', this.state.isLoading);
    const { privateDataFetch } = this.props;
    await privateDataFetch('/getAllTrees/', fetchTreesAction);
    this.toggleState('isLoading', this.state.isLoading);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = async (id, type) => {
    this.toggleState('isLoading', this.state.isLoading);
    let response;
    const { history, privatePostData } = this.props;
    const data = { id, type };
    if (type === 'tree') {
      response = await privatePostData('/getTreeAndIntents/', openTreeAction, 'post', data);
    } else {
      response = await privatePostData('/getIntentAndPayload/', openTreeAction, 'post', data);
    }
    // eslint-disable-next-line no-unused-expressions
    response && response.error && (
      toast.dismiss(),
      toast.error(`${response.error.message}`, { autoClose: 3500, hideProgressBar: false }),
      this.toggleState('isLoading', this.state.isLoading)
    );
    // eslint-disable-next-line no-unused-expressions
    response && response.data && (
      toast.dismiss(),
      toast.success('Login successful', { autoClose: 3500, hideProgressBar: false }),
      this.toggleState('isLoading', this.state.isLoading)
      // history.push('/dashboard')
    )
  };

  handleSubmit = async (event) => {
    // event.preventDefault();
    // const { privatePostData } = this.props;
    // const { account, type, amount} = this.state;
    // const data = { account, type, amount};

    // const response = await privatePostData('/transactions/', makeTransactionAction, 'post', data);
    // // eslint-disable-next-line no-unused-expressions
    // response && response.error && (
    //   toast.error('Transaction failed, please try again', { autoClose: 3500, hideProgressBar: false })
    // );
    // // eslint-disable-next-line no-unused-expressions
    // response && response.data && (
    //   toast.success('Transaction Successful', { autoClose: 3500, hideProgressBar: false })
    // );
  }

  render() {
    const { isLoading } = this.state;
    const { retrievedTrees } = this.props;
    return (
      <DashboardComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleClick={this.handleClick}
        retrievedTrees={retrievedTrees}
        isLoading={isLoading}
      />
    );
  };
};

const matchDispatchToProps = (dispatch) => bindActionCreators({fetchTreesAction, privateDataFetch, openTreeAction, privatePostData}, dispatch);

const mapStateToProps = state => {
  return {
    retrievedTrees: state.treesReducer.retrievedTrees,
  };
};

InputForm.propTypes = {
  retrievedTrees: PropTypes.object,
  privateDataFetch: PropTypes.func,
  privatePostData: PropTypes.func,
  fetchTreesAction: PropTypes.func,
  openTreeAction: PropTypes.func,
  // privatePostData: PropTypes.func.isRequired,
};

InputForm.defaultProps = {
  retrievedTrees: {},
};

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(InputForm);

