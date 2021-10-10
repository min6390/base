import {createAction} from 'redux-unfold-saga';
import {UserActionType} from '../types';

export default {
  getById: createAction(UserActionType.GET_BY_ID),
  postMessageUser: createAction(UserActionType.POST_USER_MESSAGE),
};
