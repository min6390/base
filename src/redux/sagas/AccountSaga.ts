import {unfoldSaga, UnfoldSagaActionType} from "redux-unfold-saga";
import {SagaIterator} from "redux-saga";
import {takeLatest} from "redux-saga/effects";
import {AccountActionType} from "../types";

import {authApi, labelApi} from "@api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CONSTANT} from "@configs";
import {Account, AuthorizeResult, Label, Notifications} from "../../../../base/src/models";
import {Utils} from "@helpers";

export function* takeChangeLoading({
  callbacks,
  type,
  payload,
}: UnfoldSagaActionType): Iterable<SagaIterator> {
  yield unfoldSaga(
    {
      handler: (): Promise<boolean> => {
        return payload?.loading;
      },
      key: type,
    },
    callbacks,
  );
}

export function* takeLogin({
  callbacks,
  type,
  payload,
}: UnfoldSagaActionType): Iterable<SagaIterator> {
  yield unfoldSaga(
    {
      handler: async (): Promise<AuthorizeResult> => {
        const data = (await authApi.login(
          payload.phoneNumber,
          payload.password,
        )) as AuthorizeResult;
        data && (await Utils.storeTokenResponse(data));
        return data;
      },
      key: type,
    },
    callbacks,
  );
}

export function* takeLogout({
  callbacks,
  type,
}: UnfoldSagaActionType): Iterable<SagaIterator> {
  yield unfoldSaga(
    {
      handler: async (): Promise<boolean> => {
        const [accessToken, refreshToken] = await Promise.all([
          AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.ACCESS_TOKEN),
          AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.REFRESH_TOKEN),
        ]);
        await Promise.all([
          authApi.revokeToken(accessToken),
          authApi.revokeToken(refreshToken),
        ]);
        await Promise.all([
          AsyncStorage.removeItem(CONSTANT.TOKEN_STORAGE_KEY.ACCESS_TOKEN),
          AsyncStorage.removeItem(CONSTANT.TOKEN_STORAGE_KEY.REFRESH_TOKEN),
        ]);
        return true;
      },
      key: type,
    },
    callbacks,
  );
}

export function* takeGetUserInfo({
  callbacks,
  type,
}: UnfoldSagaActionType): Iterable<SagaIterator> {
  yield unfoldSaga(
    {
      handler: async (): Promise<Account | undefined> => {
        const data = await authApi.getUserInfo();
        return data;
      },
      key: type,
    },
    callbacks,
  );
}

export function* takeGetNotifications({
  callbacks,
  type,
  payload,
}: UnfoldSagaActionType): Iterable<Notifications> {
  yield unfoldSaga(
    {
      handler: async (): Promise<any> => {
        try {
          const {pageIndex = 1, pageSize = 10} = payload;
          const data = await authApi.getNotifications(pageIndex, pageSize);
          return data;
        } catch (error) {
          console.log("takeGetNotifications", error);
        }
      },
      key: type,
    },
    callbacks,
  );
}

export function* takeReadNotification({
  callbacks,
  type,
  payload,
}: UnfoldSagaActionType): Iterable<Notifications> {
  yield unfoldSaga(
    {
      handler: async (): Promise<any> => {
        try {
          const {notificationId} = payload;
          const data = await authApi.readNotification(notificationId);
          return data;
        } catch (error) {
          console.log("takeReadNotification", error);
        }
      },
      key: type,
    },
    callbacks,
  );
}

export function* takeGetLabelOptions({
  callbacks,
  type,
}: UnfoldSagaActionType): Iterable<SagaIterator> {
  yield unfoldSaga(
    {
      handler: async (): Promise<Label[] | undefined> => {
        const data = await labelApi.getLabelLiteForDropdown();
        return data;
      },
      key: type,
    },
    callbacks,
  );
}
export default function* accountSaga(): SagaIterator {
  yield takeLatest(AccountActionType.CHANGE_LOADING, takeChangeLoading);
  yield takeLatest(AccountActionType.LOGIN, takeLogin);
  yield takeLatest(AccountActionType.LOGOUT, takeLogout);
  yield takeLatest(AccountActionType.GET_USER_INFO, takeGetUserInfo);
  yield takeLatest(AccountActionType.GET_NOTIFICATIONS, takeGetNotifications);
  yield takeLatest(AccountActionType.READ_NOTIFICATION, takeReadNotification);
  yield takeLatest(AccountActionType.GET_LABEL_OPTIONS, takeGetLabelOptions);
}
