import { Text,View } from 'react-native';
import styled from 'styled-components/native';
import { colorTheme } from '../colorTheme';

export const TeamNameContainer = styled.View`
  display: flex;
	justify-content: center;
	
	padding-left: 20%;	
`;

export const TNTitle = styled.Text`
	font-size: 38px;
	font-weight: bold;
	/* fontFamily: 'Poppins-Bold';*/
	color: ${colorTheme.mode[0].text1};
  display: flex;
	justify-content: left;
	text-align: center;
`;