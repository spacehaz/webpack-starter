import { takeEvery } from 'redux-saga/effects'
import sendData from './every/send-data'

export default function * () {
  yield takeEvery('*USER.SEND_DATA', sendData)
}
