import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
