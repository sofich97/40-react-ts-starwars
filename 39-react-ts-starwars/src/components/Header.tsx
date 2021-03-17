import React, {useContext} from 'react';
import Navigation from "./Navigation";
import {characters} from "../utils/constants";
import {SWContext} from "../utils/context";
import {SWContextValue} from "../types";

const Header: React.FC = (): JSX.Element => {
    const {hero} = useContext<SWContextValue>(SWContext);
    return (
        <header>
            <Navigation/>
            <h1 className="text-center py-3">{characters[hero].name}</h1>
        </header>
    );
};

export default Header;