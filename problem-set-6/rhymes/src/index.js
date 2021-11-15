import ReactDOM from 'react-dom';
import Rhymes from './Rhymes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

ReactDOM.render(<>
	    <nav className="header navbar navbar-dark">
            <a href = "/"><span className="navbar-brand mb-0 h1">DB</span></a>
        </nav> 
        <div className = "container">
			<h3>Rhyme Finder (579 Problem Set 6 in React)</h3><Rhymes />
		</div>


		</>, document.getElementById('root'));
