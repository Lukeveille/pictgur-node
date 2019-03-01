import { workerSaga } from '../sagas.js'

it('Makes an API call', () => {
  const makeCall = workerSaga()

  console.log(workerSaga().next())
  workerSaga().next()
  console.log(workerSaga().next())
})