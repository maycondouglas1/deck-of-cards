import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchCardsRequest,
  fetchCardsSuccess,
  fetchCardsFailure,
} from "../reducers/cardSlice";
import { API_URL } from "../../api/api";
import axios, { AxiosResponse } from "axios";
import Card from "../../types/Card";

function* fetchCards(payload: any): Generator<any, void, any> {
  try {
    const response: AxiosResponse<any> = yield call(
      axios.get,
      `${API_URL}/?deck_count=${payload}`
    );

    const cards: Card[] = response.data.cards;

    yield put(fetchCardsSuccess(cards));
  } catch (error: any) {
    yield put(fetchCardsFailure(error.message));
  }
}

export default function* cardSaga() {
  yield takeLatest(fetchCardsRequest.type, fetchCards);
}
