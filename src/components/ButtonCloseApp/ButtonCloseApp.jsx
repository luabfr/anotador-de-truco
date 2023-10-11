import React from 'react';
import { Button , BackHandler } from 'react-native';
import { MainButton } from '../Button/Button.styled';


const ButtonCloseApp =()=>{
	const handlePress = () => {
		BackHandler.exitApp();
	};
	return(
		<MainButton label="Salir" onPress={handlePress} mt100 alignLeft />
	)
}

export default ButtonCloseApp