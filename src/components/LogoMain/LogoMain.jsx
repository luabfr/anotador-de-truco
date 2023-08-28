import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';

const ViewStyled = styled.View`
	justify-content: center;
  align-items: center;
	height: 200px;
	margin: 40px;
`;

const ImageStyled = styled.Image`
	width: 160px;
  height: 160px;
`;



const LogoMain = ()=>{

	return(
		<ViewStyled>
			<ImageStyled source={require('../../../assets/logo.png')} />
		</ViewStyled>
	)
}


export default LogoMain