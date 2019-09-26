import React from 'react';
import styled from 'styled-components';

const StyledSubTitle = styled.span`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 1.3rem;
`;

const Subtitle: React.FC = ({ children }) => <StyledSubTitle>{children}</StyledSubTitle>;

export default Subtitle;
