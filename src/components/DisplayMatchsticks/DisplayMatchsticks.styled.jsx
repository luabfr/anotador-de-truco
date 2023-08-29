import { Text,View } from 'react-native';
import styled , {css} from 'styled-components/native';
import { Dimensions } from 'react-native';

// Obtén las dimensiones de la pantalla
const windowDimensions = Dimensions.get('window');
// Altura total de la pantalla
const screenHeight = windowDimensions.height;
console.log('screenHeight',screenHeight)
console.log('6 %',screenHeight*0.06)


export const DisplayMatchsticksContainer = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	margin-top: 20px;
	margin-left: 40px;
	margin-right: 40px;
	
	${props => props.borderBottom && css`
		borderBottomWidth: 1px;
		borderBottomColor: grey; 
	`};
	
`;


export const StickGroup = styled.View`
	display: flex;
	position: relative;
	width: ${screenHeight*0.06}px;
	height: ${screenHeight*0.06}px;	
	margin-bottom: ${screenHeight * 0.03}px;
	border-radius: 4px;
	overflow: hidden;
`;

export const StickTop = styled.View`
	display: flex;
	position: relative;
	width: 100%;
	height: 6px;		
	z-index: 10;
	background-color: ${props => (props.on ? '#FFC700' : '#0000')};
`;

export const StickRight = styled.View`
	display: flex;
	width: 6px;
	height: 100%;		
	position: absolute;
	right: 0;
	z-index: 9;
	

	background-color: ${props => (props.on ? '#FFC700' : '#0000')};
`;

export const StickBottom = styled.View`
	display: flex;
	width: 100%;
	height: 6px;		
	position: absolute;
	bottom: 0;
	z-index: 8;
	

	background-color: ${props => (props.on ? '#FFC700' : '#0000')};
`;

export const StickLeft = styled.View`
	display: flex;
	width: 6px;
	height: 100%;		
	position: absolute;
	left: 0;
	z-index: 7;
	

	background-color: ${props => (props.on ? '#FFC700' : '#0000')};
`;

export const StickDiagonal = styled.View`
	display: flex;
	width: 6px;
	height: 125%;	
	position: absolute;

	translate: -50%;
	transform: rotate(-45deg);
	top: -5px;
	left: 50%;
	z-index: 6;

	background-color: ${props => (props.on ? '#FFC700' : '#0000')};
`;