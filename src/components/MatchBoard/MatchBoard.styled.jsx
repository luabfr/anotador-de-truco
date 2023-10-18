import styled from 'styled-components/native';
import { SafeAreaView, TouchableOpacity,Text , Image} from 'react-native';
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

	width: 90%;
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

export const ButtonLabelModal = styled.Text`
  display: flex; 
  color: ${props => `${colorTheme.mode[props.colorModeSelected].text1}`};
  font-size: 32px;
  font-weight: bold;
  justify-content: flex-start;
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

export const ModalButtonsWrapper = styled.View`
  width: 100%;
	align-items: center;
	position: absolute;
  bottom: 5%;
`;

export const WinnersGroup = styled.View`
	width: 100%;
  height: 100%;
  padding-top: 30vh;

`;

export const WinnersImgWrapper = styled.View`
  align-items: center;
`;

export const WinnersText1 = styled.Text`
	color: #FFE146;
	font-size: 38px;
	font-weight: bold;
	text-align: center;
	line-height: 48px;
`

export const WinnersText2 = styled.Text`
	color: #BBBBBB;
	font-size: 24px;
  font-weight: bold;
	text-align: center;
	line-height: 36px;
	margin-top: 5%;
`

export const WinnersText3 = styled.Text`
	color: white;
	font-size: 38px;
	font-weight: bold;
	text-align: center;
	line-height: 48px;
`;


export const WinnersImage = styled.Image`
	width: 200px;
	height: 200px;

	svg{
		path {
			stroke: lime !important;
		}
	}
`