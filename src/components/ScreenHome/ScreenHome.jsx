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
	const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)

	const matchStarted = ((teamAPoints != 0) || (teamBPoints != 0)) ? true : false;

	const dispatch = useDispatch();
	const handleNewMatch = () => {
		dispatch(resetPoints());
		navigation.navigate('ScreenMatch')
	};


	return (
		<MainContainer colorModeSelected={colorModeSelected}>
			<LogoMain /> 
			{matchStarted &&
				<MainButton label="Volver a la partida" alignLeft onPress={() => navigation.navigate('ScreenMatch')} />
			}
			<MainButton label="Nueva partida" alignLeft onPress={() => handleNewMatch() } />
			{/* <MainButton label={"Opciones Visuales"} alignLeft onPress={() => navigation.navigate('ScreenOptions')}/> */}
			<ButtonCloseApp />			
		</MainContainer>
	);
	
}

export default HomeScreen