import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import StoreContext from './storeContext';
import {Provider} from './storeContext';

 let rerenderEntireTree = (state) => {
   debugger
  ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
     
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree (state)
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
