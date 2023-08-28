import React from 'react';
import PlayerBoard from '../PlayerBoard/PlayerBoard';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

const MBContainer = styled.SafeAreaView`
  height: 50%;
	width: 100% ; 
	flex: 1;
	flex-direction: row;
	justify-content: center;
`;

const MatchBoard = ({  }) => {
	return (
		<MBContainer>
			<PlayerBoard team={0} />
			<PlayerBoard team={1} />
		</MBContainer>
	);
};

export default MatchBoard