import React from 'react';
import ButtonCloseApp from '../ButtonCloseApp/ButtonCloseApp';
import { MainButton } from '../Button/Button.styled';
import LogoMain from '../LogoMain/LogoMain';
import { MainContainer } from './ScreenHome.styled';
import { useSelector,useDispatch } from 'react-redux';
import { resetPoints } from '../../store/actions';


const HomeScreen = ({ navigation }) => {
	const teamAPoints = useSelector((state) => state.teamsReducer.teams[0].points)
	const teamBPoints = useSelector((state) => state.teamsReducer.teams[1].points)

	const matchStarted = ((teamAPoints != 0) || (teamBPoints != 0)) ? true : false;

	const dispatch = useDispatch();
	const handleNewMatch = () => {
		dispatch(resetPoints());
		navigation.navigate('MainMenu')
	};


	return (
		<MainContainer >
			<LogoMain /> 
			<MainButton label="Nueva partida" onPress={() => handleNewMatch() } />

			{ matchStarted &&
				<MainButton label="Volver a la partida" onPress={() => navigation.navigate('MainMenu')} />
			}
			{/* <MainButton label={"Opciones Visuales"} onPress={() => navigation.navigate('OptionsMenu')} /> */}
			<ButtonCloseApp />			
		</MainContainer>
	);
	
}

export default HomeScreen