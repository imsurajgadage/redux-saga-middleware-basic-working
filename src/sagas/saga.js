import { put, delay, takeLatest, all, fork } from "redux-saga/effects";


function* ageUpAsync(){
    yield delay(2000);
    yield put({type: "AGE_UP_ASYNC", value:1})
}

function* ageDownAsync(){
    yield delay(2000);
    yield put({type: "AGE_DOWN_ASYNC", value:1})
}

 function* watchAgeUp(){
    yield takeLatest('AGE_UP',ageUpAsync)
}

function* watchAgeDown(){
    yield takeLatest('AGE_DOWN',ageDownAsync)
}


export function* rootSaga () {
    yield all([
        fork(watchAgeUp), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(watchAgeDown),
    ]);
}