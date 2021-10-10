import {combineReducers} from 'redux';
import {
  accountReducer,
  defaultState as accountDefaultState,
} from './AccountReducer';
import {userReducer, defaultState as userDefaultState} from './UserReducer';
import {IRootState} from '@redux';
export const RootStateDefault: IRootState = {
  account: accountDefaultState,
  user: userDefaultState,
};

// @ts-ignore
const reducers = combineReducers<IRootState>({
  account: accountReducer,
  user: userReducer,
});

export default reducers;
