import React from 'react';
import styled from "styled-components";

const StyledOutterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;`

const StyledContainer = styled.div`
border: 2px dashed black;
width: 33%;
margin: 5%;`;

//props in this are going to come from CardList
const PlayerCard2 = props => {
    console.log('player name', props.playerName);

    return (
        <StyledOutterContainer>
            <StyledContainer>
                <p>Name: {props.playerName}</p>
                <p>Country: {props.playerCountry}</p>
            </StyledContainer>
        </StyledOutterContainer>
    )
}

export default PlayerCard2;