import React, {Component} from 'react';
import {NavLink, Link} from "react-router-dom";

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <div
                        className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                        <h5 className="my-0 mr-md-auto font-weight-normal">Shop</h5>
                        <nav className="my-2 my-md-0 mr-md-3">

                            <NavLink activeClassName="active" className="p-2 text-dark" to="/">Home</NavLink>

                            <NavLink activeClassName="active" className="p-2 text-dark" to="/catalog">Catalog</NavLink>

                            <NavLink activeClassName="active" className="p-2 text-dark" to="/catalog/add">Add</NavLink>

                            <NavLink activeClassName="active" className="p-2 text-dark" to="/about">About</NavLink>

                        </nav>
                        <Link className="btn btn-outline-primary" to="/login">Sign in</Link>
                    </div>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;