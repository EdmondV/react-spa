import React, { PureComponent } from 'react';
import styled from 'styled-components';

const CustomButton = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: ${({ active }) => active ? '#f9621e' : '#d8d8d8'};
	cursor: pointer;
`;

class Button extends PureComponent {
	render() {
		const { children, setActive, type, active } = this.props;
		return (
			<CustomButton active={active} onClick={setActive}>{children}</CustomButton>
		)
	}
}

export default Button
