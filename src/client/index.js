import ReactDOM from 'react-dom';
import greeter from './components/greeter';

const main = document.getElementsByTagName('main')[0];

ReactDOM.render(greeter('World'), main);
