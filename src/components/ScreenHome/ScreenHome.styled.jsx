import styled from 'styled-components/native';
import { View } from 'react-native';
import { colorTheme } from '../colorTheme';

export const MainContainer = styled.View`
	display: flex;
	height: 100%;
	flex-direction: column;
	background: ${colorTheme.mode[0].bg};
	padding-top: 40px;
	padding-bottom:	 40px;
`;