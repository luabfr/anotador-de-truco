import { Text,View } from 'react-native';
import styled,{css} from 'styled-components/native';

function marginHandler({ m1,m0,mt1,mb,mb1 }) {
	return (
		(m0 && `margin: 0;`) ||
		(m1 && `margin: 1rem;`) ||
		(mt1 && `margin-top: 1rem;`) ||
		(mb1 && `margin-bottom: 1rem;`) ||
		(mb && `margin-bottom: ${mb}rem;`) ||
		``
	);
}




export const Flex = styled.View`
  display: flex;
	flex-direction: ${(props) => props.row ? 'row': "column"};
	padding: ${(props) => props.p10 ? '10px' : props.p20 ? '20px' : '0px'};
	${marginHandler}
`;

export const MainApp = styled.View`
  flex: 1;
	background-cColor: #fff;
	align-items: center;
	justify-content: center;
	font-size: 20px;
`;
