import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-weight: bold;
`;

const Title: React.FC = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export default Title;
