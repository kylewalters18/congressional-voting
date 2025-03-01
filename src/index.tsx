import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import * as serviceWorker from 'serviceWorker'
import { Provider } from 'react-redux'
import rootReducer from 'reducers'
import { createStore } from 'redux'
import { StoreState } from 'types'
import { Action } from 'actions'

import App from 'components/app';

const store = createStore<StoreState, Action, any, any>(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >,
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
