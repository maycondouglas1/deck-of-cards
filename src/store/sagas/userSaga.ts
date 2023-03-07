import { put, takeLatest } from "redux-saga/effects";
import { setUser } from "../reducers/userSlice";

function* createUser(action: any) {
  try {
    const user = action.payload;
    yield put(setUser(user));
  } catch (error: any) {
    console.log("error", error);
  }
}

export default function* userSaga() {
  yield takeLatest("CREATE_USER", createUser);
}
