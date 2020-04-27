import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { privateDataFetch, privatePostData } from '../../redux/middlewares';
import DashboardComponent from '../../components/dashboard';
import { fetchTreesAction, openTreeAction, createTreeAction } from '../../redux/actions/trees';


export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      name: '',
      body: '',
      isLoading: false,
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
    const { privatePostData } = this.props;
    const data = { id, type };
    if (type === 'tree') {
      response = await privatePostData('/getTreeAndIntents/', openTreeAction, 'post', data);
    }
    if (type === 'intent') {
      response = await privatePostData('/getIntentAndPayload/', openTreeAction, 'post', data);
    }
    if (type === 'answer') {
      response = await privatePostData('/getAnswer/', openTreeAction, 'post', data);
    }
    // eslint-disable-next-line no-unused-expressions
    response && response.error && (
      toast.dismiss(),
      toast.error(`${response.error.message}`, { autoClose: 5000, hideProgressBar: false }),
      this.toggleState('isLoading', this.state.isLoading)
    );
    // eslint-disable-next-line no-unused-expressions
    response && response.data && (
      this.toggleState('isLoading', this.state.isLoading)
    )
  };

  handleSubmit = async (event, buttonType) => {
    event.preventDefault();
    toast.info('working...', { autoClose: false, hideProgressBar: true })
    let response
    const { privatePostData, retrievedTrees } = this.props;
    let { title, name, body} = this.state;
    const { type, id } = retrievedTrees.data;
    const parent = id;

    if (buttonType === 'newIntent') {
      const data = { name, body, parent};
      response = await privatePostData('/createIntent/', createTreeAction, 'post', data);
    }

    if (buttonType === 'newTree') {
      const data = { title, parent};
      response = await privatePostData('/createTree/', createTreeAction, 'post', data);
    }

    if (buttonType === 'newAnswer') {
      const data = { title, body, parent};
      response = await privatePostData('/createAnswer/', createTreeAction, 'post', data);
    }

    if (buttonType === 'editIntent') {
      if (name === '') { name = retrievedTrees.data.name};
      if (body === '') { body = retrievedTrees.data.body};
      const data = { id, updateFields: {name, body} };
      response = await privatePostData('/updateIntent/', createTreeAction, 'patch', data);
    }

    if (buttonType === 'editTree') {
      const data = { id, updateFields: {title} };
      response = await privatePostData('/updateTree/', createTreeAction, 'patch', data);
    }

    if (buttonType === 'editAnswer') {
      if (title === '') { title = retrievedTrees.data.title};
      if (body === '') { body = retrievedTrees.data.body};
      const data = { id, updateFields: {title, body} };
      response = await privatePostData('/updateAnswer/', createTreeAction, 'patch', data);
    }

    // eslint-disable-next-line no-unused-expressions
    response && response.error && (
      toast.dismiss(),
      toast.error(`Failed: ${response.error.message}`, { autoClose: 5000, hideProgressBar: false })
    );
    // eslint-disable-next-line no-unused-expressions
    response && response.data && (
      toast.dismiss(),
      toast.success('Done', { autoClose: 3500, hideProgressBar: false }),
      this.handleClick(id, type)
    );
  }

  render() {
    const { isLoading } = this.state;
    const { retrievedTrees } = this.props;
    return (
      <DashboardComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleClick={this.handleClick}
        getTrees={this.getTrees}
        retrievedTrees={retrievedTrees.data}
        isLoading={isLoading}
      />
    );
  };
};

const matchDispatchToProps = (dispatch) => bindActionCreators({
  fetchTreesAction,
  privateDataFetch,
  openTreeAction,
  privatePostData,
  createTreeAction,
}, dispatch);

const mapStateToProps = state => {
  return {
    retrievedTrees: state.treesReducer.retrievedTrees,
  };
};

Dashboard.propTypes = {
  retrievedTrees: PropTypes.object.isRequired,
  privateDataFetch: PropTypes.func,
  privatePostData: PropTypes.func,
  fetchTreesAction: PropTypes.func,
  openTreeAction: PropTypes.func,
  createTreeAction: PropTypes.func,
};

Dashboard.defaultProps = {
  retrievedTrees: {},
};

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Dashboard);

