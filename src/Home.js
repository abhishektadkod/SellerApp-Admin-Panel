import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import Order from './orders';

function Home(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul class="navbar-nav mr-auto">

                        <li class="nav-item">
                            <a class="nav-link" href="/seller">Seller</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/order">Orders</a>
                        </li>

                    </ul>
                </div>
                <div class="mx-auto order-0">
                    <a class="navbar-brand mx-auto" href="/">Admin Panel</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>

            </nav>

            <Router>
                <main>


                <Route exact path="/">Hello</Route>
                    <Route path="/seller"><App/></Route>
                    <Route path="/order"><Order/></Route>

                </main>
            </Router>

        </div>
    );
}

export default Home;