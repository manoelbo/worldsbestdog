import {
    UPDATE_DOG,
    UPDATE_CUSTOM
} from './types';

export const updateDog = ({ prop, value }) => {
	return {
		type: UPDATE_DOG,
		payload: { prop, value }
	};
};

export const updateCustom = ({ prop, value }) => {
	return {
		type: UPDATE_CUSTOM,
		payload: { prop, value }
	};
};
