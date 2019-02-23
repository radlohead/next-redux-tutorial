import { ActionConsts } from '@Definations';
import { IAction, IHomePage } from '@Interfaces';

const INITIAL_STATE: IHomePage.IStateProps = { };
type IMapPayload = IHomePage.Actions.IMapPayload;

export const HomeReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
		case ActionConsts.Home.SetReducer:
			return {
				...state,
				...action.payload
			};

		case ActionConsts.Home.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
