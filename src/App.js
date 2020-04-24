import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './redux/store/store';
import Routes from './routes';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <ToastContainer />
        <Routes />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
