import { TouchableOpacity, Text } from 'react-native';
import styled , {css} from 'styled-components/native';
import React from 'react'
import { Dimensions } from 'react-native';
import { colorTheme } from '../colorTheme';
import { useSelector } from 'react-redux';



const windowDimensions = Dimensions.get('window'); // Obtén las dimensiones de la pantalla
const screenHeight = windowDimensions.height; // Altura total de la pantalla


export const ButtonLabel = styled.Text`
  display: flex; 
  justify-content: center;
  align-items: center;
  color:  ${ props => `${colorTheme.mode[props.colorModeSelected].text1}` };
  font-size: 48px;
  line-height: 60px;
  font-weight: bold;
  text-align: center;
`;

export const TheButton = styled.TouchableOpacity`
  background: ${ props => `${colorTheme.mode[props.colorModeSelected].grayButtons}` };
  height: ${Math.round(screenHeight * 0.06)}px;
  width: ${Math.round(screenHeight * 0.06)}px;
  border-radius: 5px;
  justify-content: center;
  align-items: center
`;

export const ButtonAddPoints = ()=>{

  const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)
  
  return(
    <ButtonAddPointsWrapper>
      <ButtonAddPointsX colorModeSelected={colorModeSelected}/>
      <ButtonAddPointsY colorModeSelected={colorModeSelected} />
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
  background: ${props => (`${colorTheme.mode[props.colorModeSelected].text1}`)};
  position: absolute;
  top: 25%;
  left: ${Math.round(screenHeight * 0.026)}px;
`;

const ButtonAddPointsY = styled.View`
  height: ${Math.round(screenHeight * 0.008)}px;
  width: ${Math.round(screenHeight * 0.03)}px;
  background: ${props => (`${colorTheme.mode[props.colorModeSelected].text1}`)};
  position: absolute;
  top: ${Math.round(screenHeight * 0.026)}px;
  left: 25%;
`;

export const ButtonRemovePoints  = styled.TouchableOpacity`
  height: ${Math.round(screenHeight * 0.008)}px;
  width: ${Math.round(screenHeight * 0.03)}px;
  background: ${ props => `${colorTheme.mode[props.colorModeSelected].text1}` };
`;


export const MainButtonStyled = styled.TouchableOpacity`  
  display: flex;
	justify-content: center;
  height: 48px;

	${props => 
    (props.mt100 && "margin-top:100px;")
  };
  ${props =>
    (props.alignLeft && css`padding-left: 40px;   align-items: flex-start;`)
  };

`;

export const MainButtonText = styled.Text`
  text-align: center;
  font-size: 32px;
	font-weight: bold;
	/* font-family: 'Poppins-Bold';*/
	color: ${props => (`${colorTheme.mode[props.colorModeSelected].text1}`)};
`;

export const MainButton = ({ label,onPress,mt100,alignLeft } ) =>{

  const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)

  return (
    <MainButtonStyled onPress={onPress} mt100={mt100} alignLeft={alignLeft}>
      <MainButtonText colorModeSelected={colorModeSelected}>
        {label}
      </MainButtonText>
    </MainButtonStyled>
  )
}