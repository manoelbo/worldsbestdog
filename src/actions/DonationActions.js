import { UPDATE_DOG } from './types';

export const updateDog = ({ prop, value }) => {
	return {
		type: UPDATE_DOG,
		payload: { prop, value }
	};
};
