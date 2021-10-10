import {createAction} from 'redux-unfold-saga';
import {AccountActionType} from '../types';

export default {
  changeLoading: createAction(AccountActionType.CHANGE_LOADING),
  login: createAction(AccountActionType.LOGIN),
  logout: createAction(AccountActionType.LOGOUT),
  getUserInfo: createAction(AccountActionType.GET_USER_INFO),
  getNotifications: createAction(AccountActionType.GET_NOTIFICATIONS),
  readNotification: createAction(AccountActionType.READ_NOTIFICATION),
  getLabelOptions: createAction(AccountActionType.GET_LABEL_OPTIONS),
};
