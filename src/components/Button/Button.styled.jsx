import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import React from 'react'
import { Dimensions } from 'react-native';


const windowDimensions = Dimensions.get('window'); // Obtén las dimensiones de la pantalla
const screenHeight = windowDimensions.height; // Altura total de la pantalla
// console.log('screenHeight',screenHeight)
// console.log('6 %',screenHeight * 0.06)


export const ButtonLabel = styled.Text`
  display: flex; 
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 48px;
  line-height: 60px;
  font-weight: bold;
  text-align: center;
`;

export const TheButton = styled.TouchableOpacity`
  background-color: #434343;
  height: ${Math.round(screenHeight * 0.06)}px;
  width: ${Math.round(screenHeight * 0.06)}px;
  border-radius: 5px;
  justify-content: center;
  align-items: center
`;

export const ButtonAddPoints = ()=>{
  return(
    <ButtonAddPointsWrapper>
      <ButtonAddPointsX />
      <ButtonAddPointsY />
    </ButtonAddPointsWrapper>
  )
}

const ButtonAddPointsWrapper = styled.View`
  height: 100%;
  width: 100%;
  position: relative;
`;


const ButtonAddPointsX = styled.View`
  height: ${Math.round(screenHeight * 0.03)}px;
  width: ${Math.round(screenHeight * 0.008)}px;
  background: white;
  position: absolute;
  top: 25%;
  left: ${Math.round(screenHeight * 0.026)}px;
`;

const ButtonAddPointsY = styled.View`
  height: ${Math.round(screenHeight * 0.008)}px;
  width: ${Math.round(screenHeight * 0.03)}px;
  background: white;
  position: absolute;
  top: ${Math.round(screenHeight * 0.026)}px;
  left: 25%;
`;

export const ButtonRemovePoints  = styled.TouchableOpacity`
  height: ${Math.round(screenHeight * 0.008)}px;
  width: ${Math.round(screenHeight * 0.03)}px;
  background: white;
`;

export const MainButtonStyled = styled.TouchableOpacity`
  
  display: flex;
	justify-content: center;
  background: black;
  height: 48px;

`;

export const MainButtonText = styled.Text`
  text-align: center;
  font-size: 32px;
	font-weight: bold;
	/* font-family: 'Poppins-Bold';*/
	color: white;
`;

export const MainButton = ({ label,onPress } ) =>{
  return (
    <MainButtonStyled onPress={onPress} >
      <MainButtonText>
        {label}
      </MainButtonText>
    </MainButtonStyled>
  )
}