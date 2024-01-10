import React from 'react';
import PlayerBoard from '../PlayerBoard/PlayerBoard';
import { useSelector,useDispatch } from 'react-redux';
import { MBContainer,ModalWrap,ModalButtons,ModButtonLabel,WinnersText1,WinnersText2,WinnersText3,ModWinnersGroup,ModSvgWrap,ModButtonsWrapper } from './MatchBoard.styled';
import { resetPoints } from '../../store/actions';
import { removePointsToTeam } from '../../store/actions';
import { colorTheme } from '../colorTheme';
import CupSvg from '../CupSvg/CupSvg';

const MatchBoard = () => {
	const teamAPoints = useSelector((state) => state.teamsReducer.teams[0].points)
	const teamBPoints = useSelector((state) => state.teamsReducer.teams[1].points)
	const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)


	
	
	let weHaveAWinner = ((teamAPoints === 30) || (teamBPoints === 30)) ? true : false;
	// weHaveAWinner = true
	let winnerIsTeamA = ( teamAPoints === 30 ) ? true : false;
	let labelForWinner1 = winnerIsTeamA ? `Ganamos` : `Ganaron` ;
	let labelForWinner2 = winnerIsTeamA ? `${teamAPoints} a ${teamBPoints}` : `${teamBPoints} a ${teamAPoints}`;
	let labelForWinner3 = winnerIsTeamA ? `NOSOTROS` : `ELLOS`;

	let winnerColor = winnerIsTeamA ? colorTheme.mode[0].sticksTeamColor[0] : colorTheme.mode[0].sticksTeamColor[1];
	
	const dispatch = useDispatch();
	const handleSeeBoardButton = () => {
		let teamId = teamAPoints === 30 ? 0 : 1;
		dispatch(removePointsToTeam(teamId,1));
	}

	const handleResetButton = () => {
		dispatch(resetPoints());
	};


	return (
		<MBContainer>
			{!weHaveAWinner &&
				<>
					<PlayerBoard team={0} borderRight={true} />
					<PlayerBoard team={1}  />
				</>
			}

			{weHaveAWinner &&
				<ModalWrap colorModeSelected={colorModeSelected}>


					
					{/* Absolute: Top */}
					<ModButtonsWrapper>
						{/* Nueva partida */}
						<ModalButtons
							borderBottom={true}
							onPress={handleResetButton}
							colorModeSelected={colorModeSelected}>
							<ModButtonLabel colorModeSelected={colorModeSelected}>
								{"Nueva partida"}
							</ModButtonLabel>
						</ModalButtons>

						{/* Volver al tablero */}
						<ModalButtons
							onPress={handleSeeBoardButton}
							colorModeSelected={colorModeSelected}>
							<ModButtonLabel colorModeSelected={colorModeSelected}>
								{"Volver al tablero"}
							</ModButtonLabel>
						</ModalButtons>

					</ModButtonsWrapper> 




					<ModWinnersGroup>
						
						<WinnersText1>  
							{labelForWinner1} 
						</WinnersText1>
						
						<ModSvgWrap> 
							<CupSvg winnerColor={winnerColor} />
						</ModSvgWrap>

					
						<WinnersText2 color={winnerColor}>
							{labelForWinner3}
						</WinnersText2>

						<WinnersText3 color={winnerColor}>
							{labelForWinner2}
						</WinnersText3>
					</ModWinnersGroup>
					
					

				</ModalWrap>
				
			}
			
		</MBContainer>
	);
};

export default MatchBoard