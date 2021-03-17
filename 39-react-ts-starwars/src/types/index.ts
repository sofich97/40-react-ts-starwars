import {match} from "react-router-dom";

export type Hero = {
    name: string;
    img: any;
    url: string
}

export type Characters = {
    [key: string]: Hero;
}

export interface SWContextValue {
    hero: string;
    changeHero?: (hero: string) => void;
}

export type Planet = {
    name: string;
}

export type Planets = {
    time: number;
    listPlanets: Array<string>
}

export type HeroInfo = {
    "name": string;
    "height": string;
    "mass": string;
    "hair_color": string;
    "skin_color": string;
    "eye_color": string;
    "birth_year": string;
    "gender": string;
}

export interface RouteParams {
    hero?: string;
}

export interface RouteProps {
    match: match<RouteParams>;
}