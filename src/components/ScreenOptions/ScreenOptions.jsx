import React from 'react';
import { View , Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch,useSelector } from 'react-redux';
import { setColorsPreset } from '../../store/actions';


const OptionsContainer = styled.View`
	height: 100%; 
	background: white;
`;

const Cuadrado = styled.View`
	height: 100px;
	width: 100px;
	margin: 100px;
`;


const ScreenOptions = ({ navigation }) => {
	const dispatch = useDispatch();
	const colorsPresets = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPresets);

	const handlePress = ( selectedPreset ) => {
		dispatch(setColorsPreset(selectedPreset));
	};


	return (
		<OptionsContainer>
			<Button title="Dark Mode [0]" onPress={handlePress(0)} />
			<Button title="Light Mode [1]" onPress={handlePress(1)} />
			<Cuadrado />
			<Text> {colorsPresets} </Text>
		</OptionsContainer>

	);
}

export default ScreenOptions