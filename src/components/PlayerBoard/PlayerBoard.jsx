import React from 'react';
import Button from '../Button/Button';
import { PlayerBoardContainer,ButtonsContainer } from './PlayerBoard.styled';
import TeamName from '../TeamName/TeamName';
import DisplayMatchsticks from '../DisplayMatchsticks/DisplayMatchsticks';


const PlayerBoard = ({team}) => {
	
	return (
		<PlayerBoardContainer>
			<TeamName team={team} />
			<DisplayMatchsticks team={team} />
			<ButtonsContainer>
				<Button teamId={team} accessibilityLabel="Sumar puntos"  p0 removePoints />
				<Button teamId={team} accessibilityLabel="Restar puntos"  p0 addPoints />
			</ButtonsContainer>
			
		</PlayerBoardContainer>
	);
};

export default PlayerBoard