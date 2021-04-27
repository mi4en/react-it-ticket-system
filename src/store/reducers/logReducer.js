import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
} from '../actions/types';

const initialState = {
	logs: null,
	current: null,
	error: null,
	loading: false,
};

const logReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case LOGS_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case GET_LOGS:
			return {
				...state,
				logs: action.payload,
				loading: false,
			};
		case ADD_LOG:
			return {
				...state,
				logs: [...state.logs, action.payload],
				loading: false,
			};
		case DELETE_LOG:
			return {
				...state,
				logs: state.logs.filter(log => log.id !== action.payload),
				loading: false,
			};
		default:
			return state;
	}
};

export default logReducer;
