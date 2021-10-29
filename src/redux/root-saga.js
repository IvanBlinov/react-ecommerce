 import { all, call } from 'redux-saga/effects';
 import {onFetchCollectionsStart} from "./shop/shop.sagas";

export default function* rootSaga() {
    all([
        call(onFetchCollectionsStart)
    ])
}