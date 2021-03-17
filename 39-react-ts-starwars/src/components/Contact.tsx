import React, {useState, useEffect} from 'react';
import "../css_modules/contacts.module.css";
import {base_url, periodMonth} from "../utils/constants";
import {Planet, Planets} from "../types";

const Contact: React.FC = (): JSX.Element => {
    const [planets, setPlanets] = useState<Array<string>>(['wait...']);

    async function fillPlanets(url: string) {
        try {
            const response = await fetch(url);
            const json: Array<Planet> = await response.json();
            const planets = json.map(item => item.name);
            setPlanets(planets);
            let info = {
                listPlanets: planets,
                time: Date.now()
            };
            localStorage.setItem('planets', JSON.stringify(info));
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        let planets: string | null | Planets = localStorage.getItem('planets');
        if (typeof planets === 'string'){
            planets = JSON.parse(planets) as Planets;
        }
        if (!planets || (Date.now() - planets.time) > periodMonth) {
            fillPlanets(`${base_url}/v1/planets`);
        } else {
            setPlanets(planets.listPlanets);
        }
    }, []);

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                <label htmlFor="planet">Planet</label>
                <select id="planet" name="planet">{
                    planets.map((item, index) => <option value={item} key={index}>{item}</option>)
                }
                </select>
                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Contact;

/*
https://www.w3schools.com/howto/howto_css_contact_form.asp
planets from API
localstorage
actual 30 days
 */