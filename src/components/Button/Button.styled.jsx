import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import React,{ FC } from 'react'

export const ButtonLabel = styled.Text`
  display: flex; 
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 48px;
  line-height: 32px;
  font-weight: bold;
  text-align: center;

`;

export const TheButton = styled.TouchableOpacity`
  background-color: #434343;
  width:60px;
  height: 60px;
  padding: 10px 20px;
  border-radius: 5px;

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