import React from 'react';
import { Text,View } from 'react-native';
import { useSelector } from 'react-redux';
import { DisplayMatchsticksContainer,StickGroup,StickTop,StickRight,StickBottom,StickLeft,StickDiagonal } from './DisplayMatchsticks.styled';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

// Obtén las dimensiones de la pantalla
const windowDimensions = Dimensions.get('window');

// Altura total de la pantalla
const screenHeight = windowDimensions.height;

console.log('screenHeight', screenHeight)

const DisplayMatchsticks = ({ team }) => {
	const teamPoints = useSelector((state) => state.teamsReducer.teams[team].points)
	const basePoints = 15;

	return (
		<>
			<DisplayMatchsticksContainer borderBottom>
				<StickGroup>
					<StickTop team={team} on={teamPoints > 0}/>
					<StickRight team={team} on={teamPoints > 1} />
					<StickBottom team={team} on={teamPoints > 2} />
					<StickLeft team={team} on={teamPoints > 3} />
					<StickDiagonal team={team} on={teamPoints > 4} />
				</StickGroup>

				<StickGroup>
					<StickTop team={team} on={teamPoints > 5} />
					<StickRight team={team} on={teamPoints > 6} />
					<StickBottom team={team} on={teamPoints > 7} />
					<StickLeft team={team} on={teamPoints > 8} />
					<StickDiagonal team={team} on={teamPoints > 9} />
				</StickGroup>

				<StickGroup>
					<StickTop team={team} on={teamPoints > 10} />
					<StickRight team={team} on={teamPoints > 11} />
					<StickBottom team={team} on={teamPoints > 12} />
					<StickLeft team={team} on={teamPoints > 13} />
					<StickDiagonal team={team} on={teamPoints > 14} />
				</StickGroup>
			</DisplayMatchsticksContainer>



			<DisplayMatchsticksContainer>
				<StickGroup>
					<StickTop team={team} on={teamPoints > basePoints + 0} />
					<StickRight team={team} on={teamPoints > basePoints + 1} />
					<StickBottom team={team} on={teamPoints > basePoints + 2} />
					<StickLeft team={team} on={teamPoints > basePoints + 3} />
					<StickDiagonal team={team} on={teamPoints > basePoints + 4} />
				</StickGroup>

				<StickGroup>
					<StickTop team={team} on={teamPoints > basePoints + 5} />
					<StickRight team={team} on={teamPoints > basePoints + 6} />
					<StickBottom team={team} on={teamPoints > basePoints + 7} />
					<StickLeft team={team} on={teamPoints > basePoints + 8} />
					<StickDiagonal team={team} on={teamPoints > basePoints + 9} />
				</StickGroup>

				<StickGroup>
					<StickTop team={team} on={teamPoints > basePoints + 10} />
					<StickRight team={team} on={teamPoints > basePoints + 11} />
					<StickBottom team={team} on={teamPoints > basePoints + 12} />
					<StickLeft team={team} on={teamPoints > basePoints + 13} />
					<StickDiagonal team={team} on={teamPoints > basePoints + 14} />
				</StickGroup>
			</DisplayMatchsticksContainer>

		</>
	);
};

export default DisplayMatchsticks