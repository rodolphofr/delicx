import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/Home';

import './assets/css/site.css'
import './assets/css/formRecipe.css'

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
