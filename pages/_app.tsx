import App, { Container } from 'next/app';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../src/reducers';

const store = createStore(
	reducer, 
	applyMiddleware(thunk)
);

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default MyApp;