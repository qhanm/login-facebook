import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-dark text-light">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink to="login-facebook" className="nav-link text-light" href="#">Login facebook</NavLink>
                    </li>

                    <li className="nav-item active">
                        <NavLink to="login-google" className="nav-link text-light" href="#">Login google</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="tree-diagram" className="nav-link text-light" href="#">Tree Diagram 1</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="tree-diagram2" className="nav-link text-light" href="#">Tree Diagram 2</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="tree-diagram3" className="nav-link text-light" href="#">Tree Diagram 3</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/sortable-tree" className="nav-link text-light" href="#">Sortable tree</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/test-upload-file" className="nav-link text-light" href="#">Test upload file</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;