const initialState = {
  teams: [
    {
      id: 0,
      name: 'Nosotros',
      points: 0,
      objectives: []
    },
    {
      id: 1,
      name: 'Ellos',
      points: 0,
      objectives: []
    }
  ],
  matchConfiguration:{
    rounds: 2,
    roundPoints: 30,
    colorsPreset: 0
  }
};

export default function teamsReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEAM_NAME':
      return {
        ...state,
        teams: state.teams.map(team => {
          if (team.id === action.payload.teamId) {
            return { ...team, name: action.payload.newName };
          }
          return team;
        })
      };
    case 'ADD_POINTS_TO_TEAM':
      return {
        ...state,
        teams: state.teams.map(team => {
          if (team.id === action.payload.teamId) {
            return { ...team, points: team.points + action.payload.points };
          }
          return team;
        })
      };
    case 'REMOVE_POINTS_TO_TEAM':
      return {
        ...state,
        teams: state.teams.map(team => {
          if (team.id === action.payload.teamId) {
            return { ...team, points: team.points - action.payload.points };
          }
          return team;
        })
      };
    case 'ADD_OBJECTIVE_TO_TEAM':
      return {
        ...state,
        teams: state.teams.map(team => {
          if (team.id === action.payload.teamId) {
            return { ...team, objectives: [...team.objectives, action.payload.objective] };
          }
          return team;
        })
      };


    case 'SET_COLORS_PRESET':
      return {
        ...state,
        matchConfiguration: {
          ...state.matchConfiguration,
          colorsPreset: action.payload,
        },
      };


    default:
      return state;
  }
}