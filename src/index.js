import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PersonalDetails from './PersonalDetails';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Other from './Other';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PersonalDetails />, document.getElementById('personal_details'));
ReactDOM.render(<WorkExperience />, document.getElementById('work_experience'));
ReactDOM.render(<Education />, document.getElementById('education'));
ReactDOM.render(<Other />, document.getElementById('other'));
registerServiceWorker();
