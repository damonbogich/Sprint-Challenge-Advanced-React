import React from 'react';
import PlayerCard2 from './PlayerCard2';

const PlayerCardList2 = props => {
    console.log(props);
    // console.log("here", props.followerData);
    return (
        
        <div>
            {props.playerData.map(player => {
                // console.log('right now here!', follower);
                return (
                <PlayerCard2
                key = {player.id}
                playerName = {player.name}
                playerCountry = {player.country}
                />
                 )
            })}
                
            
        </div>
    )
}
export default PlayerCardList2;