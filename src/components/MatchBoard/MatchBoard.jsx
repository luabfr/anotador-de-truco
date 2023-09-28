import React from 'react';
import PlayerBoard from '../PlayerBoard/PlayerBoard';
import { useSelector,useDispatch } from 'react-redux';
import { MBContainer,ModalWinner,ButtonsGroup, ModalButtons, ButtonLabel } from './MatchBoard.styled';
import { resetPoints } from '../../store/actions';
import { removePointsToTeam } from '../../store/actions';

const MatchBoard = () => {
	const teamAPoints = useSelector((state) => state.teamsReducer.teams[0].points)
	const teamBPoints = useSelector((state) => state.teamsReducer.teams[1].points)

	let weHaveAWinner = ((teamAPoints == 30) || (teamBPoints == 30)) ? true : false;
	// console.log('weHaveAWinner', weHaveAWinner)

	const dispatch = useDispatch();
	const handleSeeBoardButton = () => {
		// al hacer click, ocultar modal.
		let teamId = teamAPoints == 30 ? 0 : 1;
		dispatch(removePointsToTeam(teamId,1));
	}

	const handleResetButton = () => {
		dispatch(resetPoints());
	};


	return (
		<MBContainer>
			<PlayerBoard team={0} />
			<PlayerBoard team={1} />

			{weHaveAWinner &&
				<ModalWinner>
					<ButtonsGroup>
						<ModalButtons onPress={handleSeeBoardButton}>
							<ButtonLabel>{"Volver al tablero"}</ButtonLabel>
						</ModalButtons>

						<ModalButtons onPress={handleResetButton}>
							<ButtonLabel>{"Resetear puntos"}</ButtonLabel>
						</ModalButtons>
					</ButtonsGroup>
				</ModalWinner>
				
			}
			
		</MBContainer>
	);
};

export default MatchBoard