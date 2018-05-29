import { combineReducers } from 'redux';
import FeedbackReducer from './FeedbackReducer';

export default combineReducers({
	feedback: FeedbackReducer,
});
