import React from 'react';
import Button from '../Button/Button';
import { Flex } from '../Layouts/Layouts';
import { PlayerBoardContainer,ButtonsContainer } from './PlayerBoard.styled';
import TeamName from '../TeamName/TeamName';
import DisplayMatchsticks from '../DisplayMatchsticks/DisplayMatchsticks';


const PlayerBoard = ({team}) => {
	return (
		<PlayerBoardContainer>
			<TeamName team={team} />
			<DisplayMatchsticks team={team} />
			<ButtonsContainer>
				<Button teamId={team} removePoints title={"-"} />
				<Button teamId={team} addPoints title={"+"} />
			</ButtonsContainer>
		</PlayerBoardContainer>
	);
};

export default PlayerBoard