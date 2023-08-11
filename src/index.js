//Required Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

//Required CSS Files
import './index.css';

//Required Components
import App from './App';
import store from './components/Redux/store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*The Provider makes the Redux store available throughout the application. DO NOT REMOVE */}
    <Provider store={store}>
      {/*This is the app itself. Every Component should be within this component. */}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
