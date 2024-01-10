import styled , {css} from 'styled-components/native';
import { SafeAreaView, TouchableOpacity,Text , Image} from 'react-native';
import { colorTheme } from '../colorTheme';

export const MBContainer = styled.SafeAreaView`
  height: 50%;
	width: 100% ; 
	flex: 1;
	flex-direction: row;
	justify-content: center;
`;

export const ModalWrap = styled.View`
	display: flex;
	width: 100%;
	background: ${ props => `${colorTheme.mode[props.colorModeSelected].bg}` };
	/* background: blueviolet; */
	align-items: center;
  justify-content: center;
  padding-bottom: 130px;
`;

// SVG + Winner is
export const ModWinnersGroup = styled.View`
	width: 100%;
	display: flex;	
	padding-top: 120px;
`;

// Botones bottom
export const ModButtonsWrapper = styled.View`
  width: 90%;
	align-items: center;
	position: absolute;
  top: 10px;
	border-width: 1px ;
	border-color: #333;
	border-radius: 10px;
`;

export const ModSvgWrap = styled.View`
  align-items: center;
	margin: 24px 0;
`;

export const WinnersText1 = styled.Text`
	color: #BBB;
	font-size: 24px;
  font-weight: bold;
	text-align: center;
	line-height: 36px;
	margin-top: 5%;
`;


export const WinnersText2 = styled.Text`
  color: ${(props) => props.color}; 
	font-size: 38px;
	font-weight: bold;
	text-align: center;
	line-height: 48px;
`;


export const WinnersText3 = styled.Text`
	color: white;
	font-size: 38px;
	font-weight: bold;
	text-align: center;
	line-height: 48px;
`;


export const ModalButtons = styled.TouchableOpacity`
	width: 90%;
  padding: 10px 10px;
	
	${(props) => props.borderBottom && css`
		border-bottom-width: 1px;
		border-color: #333;`
	};  
`;

export const ModButtonLabel = styled.Text`
  display: flex; 
	color: #bbb;
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
	text-transform: uppercase;
	text-align: center;
`;


