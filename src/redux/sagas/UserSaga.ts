import {unfoldSaga, UnfoldSagaActionType} from "redux-unfold-saga";
import {SagaIterator} from "redux-saga";
import {takeLatest} from "redux-saga/effects";
import {UserActionType} from "../types";

import {userApi} from "@api";
import {User, UserMessage} from "../../../../base/src/models";

export function* takeGetById({
  callbacks,
  type,
}: UnfoldSagaActionType): Iterable<SagaIterator> {
  yield unfoldSaga(
    {
      handler: async (id: string): Promise<User | undefined> => {
        const data = await userApi.getById(id);
        return data;
      },
      key: type,
    },
    callbacks,
  );
}

export function* takePostUserMessage({
  callbacks,
  type,
  payload,
}: UnfoldSagaActionType): Iterable<SagaIterator> {
  yield unfoldSaga(
    {
      handler: () => {
        return payload;
      },
      key: type,
    },
    callbacks,
  );
}

export default function* userSaga(): SagaIterator {
  yield takeLatest(UserActionType.GET_BY_ID, takeGetById);
  yield takeLatest(UserActionType.POST_USER_MESSAGE, takePostUserMessage);
}
