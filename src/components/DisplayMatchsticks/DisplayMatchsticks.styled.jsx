import { Text,View } from 'react-native';
import styled , {css} from 'styled-components/native';


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
	width: 60px;
	height: 60px;	
	margin-bottom: 20px;
	border-radius: 4px;
	overflow: hidden;

`;

export const StickTop = styled.View`
	display: flex;
	position: relative;
	width: 60px;
	height: 6px;		
	z-index: 10;
	background-color: ${props => (props.on ? '#FFC700' : '#0000')};
`;

export const StickRight = styled.View`
	display: flex;
	width: 6px;
	height: 60px;		
	position: absolute;
	right: 0;
	z-index: 9;
	

	background-color: ${props => (props.on ? '#FFC700' : '#0000')};
`;

export const StickBottom = styled.View`
	display: flex;
	width: 60px;
	height: 6px;		
	position: absolute;
	bottom: 0;
	z-index: 8;
	

	background-color: ${props => (props.on ? '#FFC700' : '#0000')};
`;

export const StickLeft = styled.View`
	display: flex;
	width: 6px;
	height: 60px;		
	position: absolute;
	left: 0;
	z-index: 7;
	

	background-color: ${props => (props.on ? '#FFC700' : '#0000')};
`;

export const StickDiagonal = styled.View`
	display: flex;
	width: 6px;
	height: 75px;	
	position: absolute;
	left: 27px;
	top: -7px;
	transform: rotate(45deg);
	z-index: 6;
	
	background-color: ${props => (props.on ? '#FFC700' : '#0000')};
`;