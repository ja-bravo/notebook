import { NextPage } from 'next';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import firebase from '../firebase';
import Page from '../components/page';

const Home: NextPage = () => {
  const [user, loading] = useAuthState(firebase!.auth());
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.replace('/login');
    }
  }, [user, loading]);
  return (
    <Page>
      <h1>Home</h1>

      <button
        onClick={() => {
          firebase.auth().signOut();
          router.replace('/login');
        }}>
        Log out
      </button>
    </Page>
  );
};

export default Home;
