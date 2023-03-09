import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchCardsRequest,
  fetchCardsSuccess,
  fetchCardsFailure,
  fetchOneCardSuccess,
  fetchOneCardRequest,
  shuffleCardsRequest,
} from "../reducers/cardSlice";
import { API_URL } from "../../api/api";
import axios, { AxiosResponse } from "axios";
import Card from "../../types/Card";

function* fetchCards(payload: any): Generator<any, void, any> {
  try {
    const response: AxiosResponse<any> = yield call(
      axios.get,
      `${API_URL}/?count=${payload.payload}`
    );

    const cards: Card[] = response.data.cards;

    yield put(fetchCardsSuccess(cards));
  } catch (error: any) {
    yield put(fetchCardsFailure(error.message));
  }
}

function* fetchOneCard(): Generator<any, void, any> {
  try {
    const response: AxiosResponse<any> = yield call(
      axios.get,
      `${API_URL}/?count=${1}`
    );

    const card: Card = response.data.cards[0];

    yield put(fetchOneCardSuccess(card));
  } catch (error: any) {
    yield put(fetchCardsFailure(error.message));
  }
}

function* shuffleCards(): Generator<any, void, any> {
  put(shuffleCardsRequest());
}

export default function* cardSaga() {
  yield takeLatest(fetchCardsRequest.type, fetchCards);
  yield takeLatest(fetchOneCardRequest.type, fetchOneCard);
  yield takeLatest(shuffleCardsRequest.type, shuffleCards);
}
