import { NextPage } from 'next';

import { useAuthState } from 'react-firebase-hooks/auth';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import firebase from '../firebase';
import Page from '../components/page';
import Categories from '../components/categories';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import Editor from '../components/editor';
import INote from '../interfaces/Note';

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Home: NextPage = () => {
  const [user, userLoading] = useAuthState(firebase!.auth());

  const router = useRouter();

  useEffect(() => {
    if (!user && !userLoading) {
      router.replace('/login');
      return;
    }

    if (user && user.email) {
      document.title = `${user.email}'s Notebook`;
    }
  }, [user, userLoading]);

  const [selectedNote, setSelectedNote] = useState({} as INote);
  console.log(selectedNote);
  return (
    <Page>
      <Content>
        <Categories onClick={note => setSelectedNote(note)} userID={user ? user.uid : undefined} />

        <Editor note={selectedNote} />
      </Content>
    </Page>
  );
};

export default Home;
