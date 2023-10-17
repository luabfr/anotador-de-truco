import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';

const LogoContainer = styled.View`
	justify-content: center;
  align-items: center;
	height: 200px;
	margin: 40px;
	margin-bottom: 10vh
`;

const ImageStyled = styled.Image`
	width: 160px;
  height: 160px;
`;



const LogoMain = ()=>{

	return(
		<LogoContainer>
			<ImageStyled source={require('../../../assets/logo.png')} />
		</LogoContainer>
	)
}


export default LogoMain