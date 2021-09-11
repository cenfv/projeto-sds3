import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" >
                    <Home/>
                </Route>
                <Route path="/dashboard" >
                    <Dashboard/>
                </Route>
              
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
