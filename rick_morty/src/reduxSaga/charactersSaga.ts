import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import {loadUsersSuccess, LOAD_USERS_ERROR, LOAD_USERS_LOADING, LOAD_USERS_SUCCESS} 
        from "./actions";
import Api from '../api'

async function fetchAsync(func) {
   const response = await func();

   if (response.ok) {
       return await response.json();
   }

   throw new Error("Unexpected error!!!");
}

function* getCharacters() {
   try {
       const characters = yield fetchAsync(Api.getUsers);

       yield put({type: LOAD_CHARACTERS_SUCCESS, data: characters});
   } catch (e) {
       yield put({type: LOAD_CHARACTERS_ERROR, error: e.message});
   }
}

export function* usersSaga() {
   // Allows concurrent fetches of users
   yield takeEvery(LOAD_CHARACTERS_LOADING, getCharacters);

   // Does not allow concurrent fetches of characters
   // yield takeLatest(LOAD_CHARACTERS_LOADING, getCharacters);
}

export default charactersSaga;