import React from 'react';
import PlayerBoard from '../PlayerBoard/PlayerBoard';
import { useSelector,useDispatch } from 'react-redux';
import { MBContainer,ModalWinner,ButtonsGroup, ModalButtons, ButtonLabel } from './MatchBoard.styled';
import { resetPoints } from '../../store/actions';
import { removePointsToTeam } from '../../store/actions';

const MatchBoard = () => {
	const teamAPoints = useSelector((state) => state.teamsReducer.teams[0].points)
	const teamBPoints = useSelector((state) => state.teamsReducer.teams[1].points)
	const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)
	
	let weHaveAWinner = ((teamAPoints == 30) || (teamBPoints == 30)) ? true : false;
	
	const dispatch = useDispatch();
	const handleSeeBoardButton = () => {
		let teamId = teamAPoints == 30 ? 0 : 1;
		dispatch(removePointsToTeam(teamId,1));
	}

	const handleResetButton = () => {
		dispatch(resetPoints());
	};


	return (
		<MBContainer>
			<PlayerBoard team={0}  />
			<PlayerBoard team={1}  />

			{weHaveAWinner &&
				<ModalWinner colorModeSelected={colorModeSelected}>

					<ButtonsGroup colorModeSelected={colorModeSelected}>
						<ModalButtons onPress={handleSeeBoardButton} colorModeSelected={colorModeSelected}>
							<ButtonLabel colorModeSelected={colorModeSelected}>{"Volver al tablero"}</ButtonLabel>
						</ModalButtons>

						<ModalButtons onPress={handleResetButton} colorModeSelected={colorModeSelected}>
							<ButtonLabel colorModeSelected={colorModeSelected}>{"Nueva partida"}</ButtonLabel>
						</ModalButtons>
					</ButtonsGroup>
				</ModalWinner>
				
			}
			
		</MBContainer>
	);
};

export default MatchBoard