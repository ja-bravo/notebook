import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 30px;
  padding: 4px;
  border-radius: 4px;
  outline: none;
  margin-bottom: 4px;
  border: 0;
  border-bottom: 1px solid #ccc;
  width: 100%;
  max-width: 300px;
`;

type InputProps = {
  className?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ children, ...rest }) => <StyledInput {...rest} />;

export default Input;
