import {
	UPDATE_DOG,
	UPDATE_CUSTOM
} from '../actions/types';

const INIT_STATE = {
	dog: {
		name: '',
		breed: '',
		age: '',
		achievement: '',
		photoUrl: ''
	},
	custom: {
		border: 'none',
		backgroundColor: 'none',
		backgroundMusic: 'none',
		stickers: 'none',
		thanks: 'none'
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
		case UPDATE_CUSTOM:
			return {
				...state,
				custom: {
					...state.custom,
					[action.payload.prop]: action.payload.value
				}
			}
		default:
			return state;
	}
};
