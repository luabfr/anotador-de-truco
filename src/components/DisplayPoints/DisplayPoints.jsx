import React  from 'react';
import { Text , View} from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

export const TextPoints = styled.Text`
  font-size: 24px;
	font-weight: 300;	
	font-family: 'Poppins-Light';
	color: #A6A6A6;
	text-align: center;
`;


const DisplayPoints = ({team}) => {
	const teamPoints = useSelector((state) => state.teamsReducer.teams[team].points)
	const labelGoodOrBad = teamPoints > 15 ? "Buenas" : "Malas";
	return (
		<View>
			<TextPoints>{teamPoints} {labelGoodOrBad} </TextPoints>
		</View>
	);
};

export default DisplayPoints