import React from 'react';
import { Button , BackHandler } from 'react-native';
import { MainButton } from '../Button/Button.styled';


const ButtonCloseApp =()=>{
	const handlePress = () => {
		BackHandler.exitApp();
	};
	return(
		<MainButton label="Cerrar" onPress={handlePress} />
	)
}

export default ButtonCloseApp