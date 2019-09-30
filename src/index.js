import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const appInstance = new App();

ReactDOM.render(appInstance.render(), document.getElementById('root'));
