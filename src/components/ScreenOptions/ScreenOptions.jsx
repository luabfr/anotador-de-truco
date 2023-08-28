import React from 'react';
import { View , Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch,useSelector } from 'react-redux';
import { setColorsPreset } from '../../store/actions';
import { colorSystem } from '../Layouts/Layouts';

const OptionsContainer = styled.View`
	height: 100%; 
	background: black;
`;

const Cuadrado = styled.View`
	height: 100px;
	width: 100px;
	margin: 100px;
	background: ${(props) =>
		props.colorsPresets && colorSystem[props.colorsPresets]
			? colorSystem[props.colorsPresets].background
			: 'orange'};
`;


const ScreenOptions = ({ navigation }) => {
	const dispatch = useDispatch();

	const colorsPresets = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPresets);

	const handlePress = ( selectedPreset ) => {
		dispatch(setColorsPreset(selectedPreset));		
	};


	return (
		<OptionsContainer>
			<Button title="preset 1" onPress={handlePress(0)} />
			<Button title="preset 2" onPress={handlePress(1)} />
			<Cuadrado colorsPresets={colorsPresets} />
			<Text> {colorsPresets} </Text>
		</OptionsContainer>

	);
}

export default ScreenOptions