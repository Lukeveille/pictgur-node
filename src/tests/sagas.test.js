import { workerSaga } from '../sagas.js'
import cloneableGenerator from 'redux-saga';

it('Makes an API call', () => {
  const makeCall = cloneableGenerator(workerSaga)
  // console.log(makeCall)
  // console.log(makeCall.next())
  // console.log(makeCall.next())
  // console.log(makeCall.next())
  // console.log(makeCall.next())
})