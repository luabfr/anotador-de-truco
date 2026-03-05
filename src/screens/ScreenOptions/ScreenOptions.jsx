import React from 'react';
import { View,Text,Linking } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch,useSelector } from 'react-redux';
import { setColorsPreset } from '../../store/actions';
import { MainButton } from '../../components/Button/Button.styled';

const OptionsContainer = styled.View`
	height: 100%; 
	background: black;
`;

const Cuadrado = styled.View`
	height: 100px;
	width: 100px;
	margin: 100px;
`;


const ScreenOptions = ({ navigation }) => {
	const dispatch = useDispatch();
	// const colorsPresets = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPresets);

	const handlePress = ( selectedPreset ) => {
		dispatch(setColorsPreset(selectedPreset));
	};


	const handleOpenPrivacyPolicy = () => {
		Linking.openURL('https://portfolio-luabfr.vercel.app/projects/anotador-de-truco/privacy-policy')
			.catch((err) => console.error('Error al abrir el enlace:',err));
	};


	return (
		<OptionsContainer>
			{/* <Button title="Dark Mode [0]" onPress={handlePress(0)} />
			<Button title="Light Mode [1]" onPress={handlePress(1)} />
			<Cuadrado />
			<Text> {colorsPresets} </Text> */}
			<MainButton label="Ir a Politicas de Privacidad" onPress={handleOpenPrivacyPolicy} mt100 />
		</OptionsContainer>

	);
} 

export default ScreenOptions
