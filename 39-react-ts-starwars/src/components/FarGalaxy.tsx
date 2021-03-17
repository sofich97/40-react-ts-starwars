import React, {useState, useEffect} from 'react';
// @ts-ignore
import style from "../css_modules/fargalaxy.module.css";
import {base_url} from "../utils/constants";

const FarGalaxy: React.FC = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [opening_crawl, setOpening_crawl] = useState<string>();

    useEffect(() => {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            setIsLoading(false);
            setOpening_crawl(opening_crawl);
        } else {
            const episode = Math.floor(Math.random() * 6) + 1;
            fetch(`${base_url}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    setIsLoading(false);
                    setOpening_crawl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });
        }
        return () => console.log('Component FarGalaxy unmounted');
    }, [])

    const text = isLoading ? 'Loading...' : opening_crawl;
    return (
        <p className={`${style.farGalaxy} text-justify`}>{text}</p>
    );

}

export default FarGalaxy;