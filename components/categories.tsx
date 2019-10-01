import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../firebase';
import Subtitle from './subtitle';
import _ from 'lodash';
import ICategory from '../interfaces/Category';
import INote from '../interfaces/Note';

const Wrapper = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  min-width: 120px;
  margin-top: 100px;
  margin-right: 40px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Note = styled.span`
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
`;

const Categories: React.FC<{ onClick: (note: INote) => void; userID?: string }> = ({ onClick, userID }) => {
  const [catDocs, categoriesLoading] = useCollection(firebase.firestore().collection('categories'));
  const [notesDocs, notesLoading] = useCollection(firebase.firestore().collection(`notes/${userID}/notes`));

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    if (catDocs) {
      setCategories(catDocs.docs.map(d => ({ id: d.id, name: d.get('name') })));
    }
  }, [catDocs, categoriesLoading]);

  useEffect(() => {
    if (notesDocs) {
      setNotes(notesDocs.docs.map(d => ({ id: d.id, title: d.get('title'), category: d.get('category'), content: d.get('content') })));
    }
  }, [notesDocs, notesLoading]);

  return (
    <Wrapper>
      {categories.map(c => (
        <Category key={c.id}>
          <Subtitle>{c.name}</Subtitle>
          {notes
            .filter(n => n.category === c.id)
            .map(n => (
              <Note onClick={() => onClick(n)} key={n.id}>
                {n.title}
              </Note>
            ))}
        </Category>
      ))}
    </Wrapper>
  );
};

export default Categories;
