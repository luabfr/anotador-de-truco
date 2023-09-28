import React  from 'react';
import { View} from 'react-native';
import { useSelector } from 'react-redux';
import { TextPoints } from './DisplayPoints.styled';


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