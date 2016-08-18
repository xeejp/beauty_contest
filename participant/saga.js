import { put, take, call, fork } from 'redux-saga/effects'

import { fetchContents, submitNumber } from './actions'

function* fetchContentsSaga() {
  while (true) {
    yield take(`${fetchContents}`)
    yield call(sendData, 'fetch contents')
  }
}

function* submitNumberSaga() {
  while(true) {
	const { payload: { number } } = yield take(`${submitNumber}`)
	yield call(sendData, 'input', number)
  }
}

function* saga() {
  yield fork(fetchContentsSaga)
  yield fork(submitNumberSaga)
}

export default saga
