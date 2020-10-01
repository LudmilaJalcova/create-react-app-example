import React from 'react'
import ReactDOM from 'react-dom'
import './styles/reset.css'
// import { Example1 } from './components/useReducer/Example1'
import Example from './components/useCallback/Example'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Example />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
