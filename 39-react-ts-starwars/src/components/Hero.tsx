import React from 'react';
// @ts-ignore
import style from "../css_modules/hero.module.css";
import {characters} from "../utils/constants";

interface Props {
    hero: string;
}

const Hero = ({hero}: Props) => {
    return (
        <section className="float-left w-25 row mt-1 mb-0 mr-3 ml-1">
            <img className={`w-100 ${style.hero}`} src={characters[hero].img} alt={characters[hero].name}/>
        </section>
    );
}

export default Hero;