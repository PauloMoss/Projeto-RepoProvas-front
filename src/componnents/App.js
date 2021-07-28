import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from "../styles/GlobalStyles";
import '../styles/reset.css';
import Header from './Header/Header';
import Home from './Home/Home';
import AddNewTest from './NewTest/AddNewTest';

export default function App() {
    return(
        <Router>
            <GlobalStyle/>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <Home/>
                </Route>
                <Route path="/send_test">
                    <Header />
                    <AddNewTest/>
                </Route>

            </Switch>
        </Router>
    );
}