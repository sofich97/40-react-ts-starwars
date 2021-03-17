import React, {useContext} from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import {Link} from "react-router-dom";
import {SWContext} from "../utils/context";
import {SWContextValue} from "../types";

const Navigation: React.FC = (): JSX.Element => {
    const {hero} = useContext<SWContextValue>(SWContext);
    return (
        <nav className="fixed-top ml-4 mt-2 nav">
            <Link className="nav-item btn btn-danger mx-1 border border-white" to={`/${homePage}/${hero}`}>
                Home
            </Link>
            <Link className="nav-item btn btn-danger mx-1 border border-white" to={`/${aboutMePage}/${hero}`}>
                About me
            </Link>
            <Link className="nav-item btn btn-danger mx-1 border border-white" to={`/${starWarsPage}`}>
                Star Wars
            </Link>
            <Link className="nav-item btn btn-danger mx-1 border border-white" to={`/${contactPage}`}>
                Contact
            </Link>
        </nav>
    );
};

export default Navigation;