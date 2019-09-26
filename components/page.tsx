import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f6f7f9;
`;

const InnerWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Global = createGlobalStyle`
  html,body, #__next {
    margin: 0;
    padding: 0;
    height: 100%
  }

  * {
    font-family: 'Fira Code', monospace;
  }
`;

const Page: React.FC = ({ children }) => {
  return (
    <>
      <Global />
      <Wrapper>
        <InnerWrapper>{children}</InnerWrapper>
      </Wrapper>
    </>
  );
};

export default Page;
