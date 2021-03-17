import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

const Main = () => {
    return (
        <Switch>
            <Route path={[`/`, `/${homePage}`, `/${homePage}/:hero`]} exact render={routeProps => <Home {...routeProps}/>}/>
            <Route path={[`/${aboutMePage}`, `/${aboutMePage}/:hero`]} exact render={routeProps => <AboutMe {...routeProps}/>}/>
            <Route path={`/${starWarsPage}`} component={StarWars} exact/>
            <Route path={`/${contactPage}`} component={Contact} exact/>
            <Route component={ErrorPage}/>
        </Switch>
    )
};

export default Main;