import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist'
import {store} from './redux/store'

let persistor = persistStore(store);

ReactDOM.render(
    
   <Provider store={store}>

         <PersistGate persistor={persistor} loading={null}>
                <App />
            </PersistGate>
   </Provider>
    
  
    ,
document.getElementById('root'));

