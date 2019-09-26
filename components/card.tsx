import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div<{ align?: string; justify?: string; height?: string; width?: string }>`
  padding: 32px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: white;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  ${p => (p.align ? `align-items: ${p.align}` : '')};
  ${p => (p.justify ? `justify-content: ${p.justify}` : '')};

  min-width: 300px;
  width: ${p => p.width || 'initial'};
  height: ${p => p.height || 'initial'};
`;

const Card: React.FC<{ align?: string; height?: string; width?: string; justify?: string }> = ({ children, justify, align, height, width }) => (
  <StyledCard justify={justify} align={align} height={height} width={width}>
    {children}
  </StyledCard>
);

export default Card;
