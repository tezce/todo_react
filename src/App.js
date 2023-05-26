import './App.css';
import Login from "./pages/Login";
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom";
import TasksList from "./pages/TasksList";

export default function MyApp() {
    return (

        <Router>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={Login}
                />
                <Route
                    path="/tasks-list"
                    component={TasksList}
                />

            </Switch>
        </Router>
        
        // // TODO если чувак уже залогинен, то сразу перебрасывать его на главную страницу
        // <LoginPage/>
    );
}


