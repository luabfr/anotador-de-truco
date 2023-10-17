import React from 'react';
import PlayerBoard from '../PlayerBoard/PlayerBoard';
import { useSelector,useDispatch } from 'react-redux';
import { MBContainer,ModalWinner,ButtonsGroup,ModalButtons,ButtonLabel,ButtonLabelModal,WinnersText1,WinnersText2,WinnersText3,WinnersGroup,WinnersImgWrapper,WinnersImage,ModalButtonsWrapper } from './MatchBoard.styled';
import { resetPoints } from '../../store/actions';
import { removePointsToTeam } from '../../store/actions';
// import { Text, View, Image } from 'react-native';


const MatchBoard = () => {
	const teamAPoints = useSelector((state) => state.teamsReducer.teams[0].points)
	const teamBPoints = useSelector((state) => state.teamsReducer.teams[1].points)
	const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)
	
	// let weHaveAWinner = true;
	let weHaveAWinner = ((teamAPoints == 30) || (teamBPoints == 30)) ? true : false;
	let winnerIsTeamA = ( teamAPoints == 30 ) ? true : false;
	let labelForWinner1 = winnerIsTeamA ? `Ganamos` : `Ganaron` ;
	let labelForWinner2 = winnerIsTeamA ? `${teamAPoints} a ${teamBPoints}` : `${teamBPoints} a ${teamAPoints}`;
	let labelForWinner3 = winnerIsTeamA ? `NOSOTROS` : `ELLOS`;
	
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
						
						<WinnersGroup>
							<WinnersImgWrapper>
								<WinnersImage
									source={require('../../../assets/icon_cup.svg')} 
								/>
							</WinnersImgWrapper>
							<WinnersText2> {labelForWinner1} </WinnersText2>
							<WinnersText1> {labelForWinner3} </WinnersText1>
							<WinnersText3> {labelForWinner2} </WinnersText3>
						</WinnersGroup>
						
						<ModalButtonsWrapper>
							<ModalButtons onPress={handleSeeBoardButton} colorModeSelected={colorModeSelected}>
								<ButtonLabelModal colorModeSelected={colorModeSelected}>{"Volver al tablero"}</ButtonLabelModal>
							</ModalButtons>

							<ModalButtons onPress={handleResetButton} colorModeSelected={colorModeSelected}>
								<ButtonLabelModal colorModeSelected={colorModeSelected}>{"Nueva partida"}</ButtonLabelModal>
							</ModalButtons>
						</ModalButtonsWrapper>
					</ButtonsGroup>
				</ModalWinner>
				
			}
			
		</MBContainer>
	);
};

export default MatchBoard