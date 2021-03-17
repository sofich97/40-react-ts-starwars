import React, {useEffect, useContext} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {defaultHero, keys} from "../utils/constants";
import {SWContext} from "../utils/context";
import {RouteProps, SWContextValue} from "../types";

const Home: React.FC<RouteProps> = (props): JSX.Element => {
    const {changeHero} = useContext<SWContextValue>(SWContext);

    let key = props.match.params.hero ?? defaultHero;
    if (!keys.includes(key)) {
        key = defaultHero;
    }

    useEffect(() => {
        changeHero!(key);
    }, [props.match.params.hero])

    return (
        <main className="clearfix">
            <Hero hero={key}/>
            <DreamTeam hero={key}/>
            <FarGalaxy/>
        </main>
    );
}

export default Home;