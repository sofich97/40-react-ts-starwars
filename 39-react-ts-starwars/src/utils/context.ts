import React from 'react';
import {defaultHero} from "./constants";
import {SWContextValue} from "../types";

export const SWContext = React.createContext<SWContextValue>({hero: defaultHero});