import { combineReducers } from 'redux';

const members = (state = { id: '' }, action: any) => {
	switch (action.type) {
		case 'checkSignInStatus': {
			return {
				...state,
				id: action.id,
			};
		}
		default:
			return state;
	}
}

export default combineReducers({
	members
});