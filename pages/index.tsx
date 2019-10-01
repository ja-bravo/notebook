import { NextPage } from 'next';

import { useAuthState } from 'react-firebase-hooks/auth';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import firebase from '../firebase';
import Page from '../components/page';
import Categories from '../components/categories';
import styled from 'styled-components';
import Editor from '../components/editor';
import INote from '../interfaces/Note';
import ReactLoading from 'react-loading';

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Home: NextPage = () => {
  const [user, userLoading] = useAuthState(firebase!.auth());
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!user && !userLoading) {
      router.replace('/login');
      return;
    }

    if (user && user.email) {
      document.title = `${user.email}'s Notebook`;
    }

    if (!userLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [user, userLoading]);

  const [selectedNote, setSelectedNote] = useState({} as INote);
  console.log(selectedNote);
  return (
    <Page>
      <Content>
        {!isLoading && (
          <>
            <Categories onClick={note => setSelectedNote(note)} userID={user ? user.uid : undefined} />

            <Editor note={selectedNote} />
          </>
        )}

        {isLoading && <ReactLoading type={'cylon'} color={'#333'} height={400} width={200} />}
      </Content>
    </Page>
  );
};

export default Home;
