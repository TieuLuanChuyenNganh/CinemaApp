import React, { Component } from 'react';

import {
    AsyncStorage,
    View,
    Text,
    AppState

} from 'react-native';
import Router from './Router'
//import { Provider } from 'react-redux'
// import createStore from '@src/reducers/create'
// const store = createStore();
class Kernel extends Component {

    render() {
        return (
            // <Provider store={store}>
            <Router />
            // </Provider>
        )
    }
}
export default Kernel