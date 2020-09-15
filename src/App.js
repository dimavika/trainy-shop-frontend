import React from 'react';
import './App.css';
import ProductListComponent from './component/ProductListComponent'
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import HomeComponent from "./component/HomeComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route  path = "/" exact component = {HomeComponent}/>
                        <Route  path = "/catalog" exact component = {ProductListComponent}/>

                    </Switch>
                </div>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
