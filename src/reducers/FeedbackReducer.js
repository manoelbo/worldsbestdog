import {
	RISE_ERROR,
	RISE_SUCCESS
} from '../actions/types';

const INIT_STATE = {
	error: '',
	success: '',
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case RISE_ERROR:
			return { ...state, error: action.payload };
		case RISE_SUCCESS:
			return { ...state, success: action.payload };
		default:
			return state;
	}
};
