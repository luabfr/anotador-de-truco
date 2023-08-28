import React from 'react';
import { View  } from 'react-native';
import ButtonCloseApp from '../ButtonCloseApp/ButtonCloseApp';
import { MainButton } from '../Button/Button.styled';
import LogoMain from '../LogoMain/LogoMain';
import styled from 'styled-components/native';

const MainContainer = styled.View`
	display: flex;
	height: 100%;
	flex-direction: column;
	background: black;
	padding-top: 40px;
	padding-bottom:	 40px;
`;



const HomeScreen = ({ navigation }) => {
	
	return (
		<MainContainer >
			<LogoMain /> 
			<MainButton label="Iniciar partida" onPress={() => navigation.navigate('MainMenu')} />
			<MainButton label={"Opciones Visuales"} onPress={() => navigation.navigate('OptionsMenu')} />
			<ButtonCloseApp />			
		</MainContainer>
	);
	
}

export default HomeScreen