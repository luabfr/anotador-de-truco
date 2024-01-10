import React from 'react';
import { Button , BackHandler } from 'react-native';
import { MainButton } from '../Button/Button.styled';
import { MainButtonsWrap } from '../ScreenHome/ScreenHome.styled';

const ButtonCloseApp =()=>{
	const handlePress = () => {
		BackHandler.exitApp();
	};
	return(
		<MainButtonsWrap absoluteBottom width100>
			<MainButton 
				label="Salir" 
				onPress={handlePress} />
		</MainButtonsWrap>
	)
}

export default ButtonCloseApp