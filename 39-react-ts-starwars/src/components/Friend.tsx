import React from 'react';
import {Link} from "react-router-dom";
import {characters, homePage} from "../utils/constants";
import styled from "styled-components";

interface Props {
    number: number
}

interface PropsFriend extends Props {
    hero: string;
}

const ImgFriend = styled.img<Props>`
  border-bottom-left-radius: ${({number}) => number === 7 ? '1rem' : 'auto'};
  border-bottom-right-radius: ${({number}) => number === 9 ? '1rem' : 'auto'}
`

const Friend = ({hero, number}: PropsFriend): JSX.Element => {

    return (
        <Link className='col-4' to={`/${homePage}/${hero}`}>
            <ImgFriend number={number} className='w-100 p-1' src={characters[hero].img} alt={characters[hero].name}/>
        </Link>
    );
};

export default Friend;