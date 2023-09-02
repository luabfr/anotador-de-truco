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
				<Button teamId={team} p0 removePoints title={"-"} />
				<Button teamId={team} p0 addPoints title={"+"} />
			</ButtonsContainer>
		</PlayerBoardContainer>
	);
};

export default PlayerBoard