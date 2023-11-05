import { useEffect, useState } from 'react';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../FirebaseConfig';
import { User, onAuthStateChanged } from 'firebase/auth';

interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  id: string;
}

export const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = FIREBASE_AUTH.currentUser;
    const uid = currentUser ? currentUser.uid : null;
    if (!uid) {
      setLoading(false);
      return;
    }

    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      if (user === null) {
        setLoading(false);
        setUserData(null);
        return;
      }
    });

    const userDocumentRef = doc(FIRESTORE_DB, 'users', uid); // Replace 'users' with your Firestore collection name.

    getDoc(userDocumentRef)
      .then((documentSnapshot) => {
        if (documentSnapshot.exists()) {
          const userData = documentSnapshot.data() as UserData;
          setUserData(userData);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error getting user document: ', error);
        setLoading(false);
      });
  }, [user]);

  return { userData, loading };
};
