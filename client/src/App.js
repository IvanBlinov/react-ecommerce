import React, {useEffect, lazy, Suspense} from 'react';

import {GlobalStyle} from "./global.styles";

import {Redirect, Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser} from "./redux/user/user.selectors";
import Spinner from "./components/spinner/spinner.component";

import Header from "./components/header/header.component";
import {checkUserSession} from "./redux/user/user.actions";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))

const App = () => {

    const currentUser = useSelector(selectCurrentUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch])

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={ShopPage} />
                        <Route exact path='/checkout' component={CheckoutPage} />
                        <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    )
}

export default App;
