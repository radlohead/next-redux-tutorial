import { ActionConsts } from '@Definations';

export const HomeActions = {
	Map : (payload: any) => ({
		payload,
		type: ActionConsts.Home.SetReducer
	}),

	Reset : () => ({
		type: ActionConsts.Home.ResetReducer
	})
};