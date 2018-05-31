import { combineReducers } from 'redux';
import FeedbackReducer from './FeedbackReducer';
import DonationReducer from './DonationReducer';

export default combineReducers({
	feedback: FeedbackReducer,
	newDonation: DonationReducer
});
