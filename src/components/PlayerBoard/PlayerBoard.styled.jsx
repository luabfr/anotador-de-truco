// import { View } from 'react-native';
import styled from 'styled-components/native';
import { colorTheme } from '../colorTheme';

export const PlayerBoardContainer = styled.View`
  display: flex;
	flex: 1;
	position: relative;
	background: ${colorTheme.mode[0].bg};

`;

export const ButtonsContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding: 20px;
	position: absolute;
	bottom: 0;
	width: 100%;
`;

