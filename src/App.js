import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';

import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

const App = () => {
	// Init Materialize JS
	useEffect(() => {
		M.AutoInit();
	});

	return (
		<Provider store={store}>
			<Fragment>
				<SearchBar />
				<div className='container'>
					<AddBtn />
					<AddLogModal />
					<EditLogModal />
					<AddTechModal />
					<TechListModal />
					<Logs />
				</div>
			</Fragment>
		</Provider>
	);
};

export default App;
