import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { User, onAuthStateChanged } from 'firebase/auth';
import { ScreenWrapper } from '../components/layout/screenWrapper';
import { Signup } from '../components/profile/signup';
import { Signin } from '../components/profile/signin';
import { Signed } from '../components/profile/signed';

export type carPouleUser = {
  id: string;
  lastname?: string;
  firstname?: string;
  username?: string;
  email: string;
  password: string;
};

export const Login = () => {
  const [signInScreen, setSignInScreen] = useState<Boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [carPouleUser, setCarPouleUser] = useState<carPouleUser>({
    email: '',
    password: '',
    id: '',
    firstname: '',
    lastname: '',
    username: ''
  });

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, [user]);
  return (
    <ScreenWrapper>
      {!user && !signInScreen && (
        <Signup
          carPouleUser={carPouleUser}
          setCarPouleUser={setCarPouleUser}
          setSignInScreen={setSignInScreen}
        />
      )}
      {!user && signInScreen && (
        <Signin
          carPouleUser={carPouleUser}
          setCarPouleUser={setCarPouleUser}
          setSignInScreen={setSignInScreen}
        />
      )}
      {user && <Signed />}
    </ScreenWrapper>
  );
};
