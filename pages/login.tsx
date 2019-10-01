import { NextPage } from 'next';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import firebase from '../firebase';
import Page from '../components/page';
import Title from '../components/title';
import Card from '../components/card';
import Subtitle from '../components/subtitle';
import Input from '../components/input';
import Button from '../components/button';

const Login: NextPage = () => {
  const [user, loading] = useAuthState(firebase!.auth());
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.replace('/');
    } else {
      document.title = 'Notebook';
    }
  }, [user, loading]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Page>
      <Title>Notebook</Title>

      <Card align="center" justify="space-between" height="300px">
        <Subtitle>Register or Sign In</Subtitle>
        <Input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="Email address" />
        <Input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />

        <Button
          onClick={async () => {
            if (email && password) {
              try {
                const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
                if (user) {
                  router.replace('/');
                } else {
                  alert('Unknown error');
                }
              } catch (e) {
                if (e.code && e.code === 'auth/weak-password') {
                  alert(e.message);
                  return;
                }
                try {
                  const user = await firebase.auth().signInWithEmailAndPassword(email, password);
                  if (user) {
                    router.replace('/');
                  } else {
                    alert('Unknown error');
                  }
                } catch (e) {
                  console.log(e.message);

                  alert(e.message || 'Unknown error');
                }
              }
            }
          }}>
          Let's go
        </Button>
      </Card>
    </Page>
  );
};

export default Login;
