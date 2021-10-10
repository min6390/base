import {Account, Label, Notifications} from '../../../../base/src/models';
import {
  UnfoldSagaActionType,
  createActionTypeOnSuccess,
} from 'redux-unfold-saga';
import {Reducer} from 'react';
import produce from 'immer';
import {AccountActionType} from '../types';

export interface IAccountState {
  profile: Account | null;
  loading: boolean;
  notifications: Notifications | undefined;
  labelOptions: Label[];
}

export const defaultState: IAccountState = {
  profile: null,
  loading: false,
  notifications: undefined,
  labelOptions: [],
};

export const accountReducer: Reducer<IAccountState, UnfoldSagaActionType> = (
  state = defaultState,
  action: UnfoldSagaActionType,
): IAccountState => {
  const {type, payload} = action;
  return produce(state, (draftState: IAccountState): void => {
    switch (type) {
      case createActionTypeOnSuccess(AccountActionType.CHANGE_LOADING):
        draftState.loading = payload;
        break;
      case createActionTypeOnSuccess(AccountActionType.GET_USER_INFO):
        draftState.profile = payload;
        break;
      case createActionTypeOnSuccess(AccountActionType.GET_NOTIFICATIONS):
        const currentPage = payload?.data?.metaData?.currentPage;
        if (currentPage === 0 || currentPage === 1) {
          draftState.notifications = payload;
        } else {
          const oldNotifications = draftState.notifications?.data.items;
          const nextNotications = payload?.data?.items;
          const newNotifications = [...oldNotifications, ...nextNotications];
          draftState.notifications = {
            ...draftState.notifications,
            ...payload,
            data: {metaData: payload?.data?.metaData, items: newNotifications},
          };
        }
        break;
      case createActionTypeOnSuccess(AccountActionType.LOGOUT):
        draftState.profile = null;
        break;
      case createActionTypeOnSuccess(AccountActionType.GET_LABEL_OPTIONS):
        draftState.labelOptions = payload;
        break;
    }
  });
};
