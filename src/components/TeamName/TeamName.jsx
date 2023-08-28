import React from 'react';
import { useSelector } from 'react-redux';
import { TeamNameContainer,TNTitle } from './TeamName.styled';
import DisplayPoints from '../DisplayPoints/DisplayPoints';


const TeamName = ({ team }) => {



	
	const teamName = useSelector((state) => state.teamsReducer.teams[team].name);
	return (
		<TeamNameContainer>
			<TNTitle >{teamName}</TNTitle>
			<DisplayPoints team={team} />
		</TeamNameContainer>
	);
};

export default TeamName