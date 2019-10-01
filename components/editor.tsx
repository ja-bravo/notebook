import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import INote from '../interfaces/Note';
import Title from './title';
import Button from './button';

const commonStyles = `
  width: 100%;
  height: 400px;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 16px;
  overflow: scroll;
`;

const StyledContent = styled(Markdown)`
  ${commonStyles}
`;

const StyledEditor = styled.textarea`
  ${commonStyles}
  border: 0;
  outline: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

const Editor: React.FC<{ note: INote }> = ({ children, note }) => {
  const [editing, setEditing] = useState(true);
  const [value, setValue] = useState(note.content || '# New note');
  const [title, setTitle] = useState(note.title || 'Title...');

  useEffect(() => {
    setValue(note.content);
    setTitle(note.title);
  }, [note]);
  return (
    <Wrapper>
      <Title
        style={{ alignSelf: 'flex-start' }}
        editable
        onChange={t => {
          if (!t || t.length === 0) {
            setTitle('Title...');
          } else {
            setTitle(t);
          }
        }}>
        {title}
      </Title>
      {editing && <StyledEditor value={value} onChange={e => setValue(e.target.value)} />}
      {!editing && <StyledContent source={value}  />}

      <Button small onClick={() => setEditing(!editing)}>
        {editing ? 'Save' : 'Edit'}
      </Button>
    </Wrapper>
  );
};

export default Editor;
