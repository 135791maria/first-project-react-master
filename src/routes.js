import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Usuarios from "./Containers/Usuarios";
import Home from "./Containers/Home";


function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/Usuarios" component={Usuarios} />
                <Route path="/" component={Home} />

            </Switch>
        </Router>
    )

}
export default Routes;





