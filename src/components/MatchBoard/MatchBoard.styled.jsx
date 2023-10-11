import styled from 'styled-components/native';
import { SafeAreaView, TouchableOpacity,Text } from 'react-native';
import { colorTheme } from '../colorTheme';

export const MBContainer = styled.SafeAreaView`
  height: 50%;
	width: 100% ; 
	flex: 1;
	flex-direction: row;
	justify-content: center;
`;

export const ModalWinner = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	height: 100% ;
	width: 100%;
	background: ${ props => `${colorTheme.mode[props.colorModeSelected].bg}` };
`


export const ModalButtons = styled.TouchableOpacity`

	background: ${ props => `${colorTheme.mode[ props.colorModeSelected ].grayButtons}` };
	width: 90%;
	margin-bottom: 5%;
  padding: 10px 10px;
  border-radius: 5px;
`;


export const ButtonLabel = styled.Text`
  display: flex; 
  justify-content: center;
  align-items: center;
  color: ${ props => `${colorTheme.mode[props.colorModeSelected].text1}` };
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonsGroup = styled.View`
	display: flex; 
  justify-content: center;
  align-items: center;
	height: 120%;
	width: 100%;
	top: -20%;
	background: ${ props => `${colorTheme.mode[props.colorModeSelected].bg}` };
	z-index: 100;
`;
