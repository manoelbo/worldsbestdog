import {
	UPDATE_DOG,
} from '../actions/types';

const INIT_STATE = {
	error: '',
	success: '',
	dog: {
		name: '',
		breed: '',
		age: '',
		achievement: '',
		photoUrl: ''
	}
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case UPDATE_DOG:
			return {
				...state,
				dog: {
					...state.dog,
					[action.payload.prop]: action.payload.value
				}
			};
		default:
			return state;
	}
};
