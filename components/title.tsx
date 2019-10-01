import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.input`
  font-weight: bold;
  display: block;
  font-size: 1.8em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  outline: 0;
  border: 0;
  background: transparent;
`;

const Title: React.FC<{ editable?: boolean; onChange?: (t: string) => void; style?: any }> = ({ children, editable, onChange, style }) => (
  <StyledTitle
    style={style}
    readOnly={!editable}
    onChange={e => {
      if (onChange) onChange(e.target.value);
    }}
    value={children as string}
  />
);

export default Title;
