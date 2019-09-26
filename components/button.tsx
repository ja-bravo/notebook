import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  padding: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 8px;
  background: #1a73e8;
  color: white;
  cursor: pointer;
  height: 25px;
  min-width: 120px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const Button: React.FC<{ onClick: () => void }> = ({ children, onClick }) => <StyledButton onClick={onClick}>{children}</StyledButton>;

export default Button;
