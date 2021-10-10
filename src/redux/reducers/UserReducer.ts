import { UserMessage, UserProfile } from "../../../../base/src/models";
import {
  createActionTypeOnSuccess,
  UnfoldSagaActionType,
} from "redux-unfold-saga";
import { Reducer } from "react";
import produce from "immer";
import { UserActionType } from "../types";

export interface IUserState {
  profile: UserProfile | null;
  message: UserMessage | null;
}

export const defaultState: IUserState = {
  profile: null,
  message: null,
};

export const userReducer: Reducer<IUserState, UnfoldSagaActionType> = (
  state = defaultState,
  action: UnfoldSagaActionType,
): IUserState => {
  const { type, payload } = action;
  return produce(state, (draftState: IUserState): void => {
    switch (type) {
      case createActionTypeOnSuccess(UserActionType.GET_BY_ID):
        draftState.profile = payload;
        break;
      case createActionTypeOnSuccess(UserActionType.POST_USER_MESSAGE):
        draftState.message = payload;
        break;
    }
  });
};
