import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { privatePostData, publicDataFetch } from '../../redux/middlewares';
import DashboardComponent from '../../components/dashboard';
import { fetchTreesAction } from '../../redux/actions/trees';


export class Dashboard extends Component {
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
    const { publicDataFetch } = this.props;
    await publicDataFetch('/getAllTrees/', fetchTreesAction);
    this.toggleState('isLoading', this.state.isLoading);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

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
    console.log('>>>', retrievedTrees.data);
    return (
      <DashboardComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        retrievedTrees={retrievedTrees.data}
        isLoading={isLoading}
      />
    );
  };
};

const matchDispatchToProps = (dispatch) => bindActionCreators({fetchTreesAction, publicDataFetch}, dispatch);

const mapStateToProps = state => {
  return {
    retrievedTrees: state.treesReducer.retrievedTrees,
  };
};

Dashboard.propTypes = {
  retrievedTrees: PropTypes.object,
  publicDataFetch: PropTypes.func,
  fetchTreesAction: PropTypes.func,
  // privatePostData: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
  retrievedTrees: {},
};

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Dashboard);

