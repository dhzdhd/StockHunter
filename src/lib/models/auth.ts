import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ENV_OBJ } from './constants';
import type { UserCredential } from 'firebase/auth';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

const firebaseConfig = {
  apiKey: ENV_OBJ.FB_API_KEY,
  authDomain: ENV_OBJ.FB_AUTH_DOMAIN,
  projectId: ENV_OBJ.FB_PROJECT_ID,
  storageBucket: ENV_OBJ.FB_STORAGE_BUCKET,
  messagingSenderId: ENV_OBJ.FB_MESSAGING_SENDER_ID,
  appId: ENV_OBJ.FB_APP_ID,
  measurementId: ENV_OBJ.FB_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loggedInfo: Writable<{
  loggedIn: boolean;
  username?: string;
  userInfo?: UserCredential;
}> = writable({ loggedIn: true });

export const user = writable({
  username: '',
  password: '',
  email: ''
});

export class Auth {
  public static async register(email: string, password: string, username: string): Promise<string> {
    /// Returns empty string if successful
    try {
      loggedInfo.set({
        loggedIn: true,
        username: username,
        userInfo: await createUserWithEmailAndPassword(auth, email, password)
      });
      return '';
    } catch (err) {
      return err as string;
    }
  }

  public static async login(email: string, password: string): Promise<string> {
    /// Returns empty string if successful
    try {
      loggedInfo.set({
        loggedIn: true,
        userInfo: await signInWithEmailAndPassword(auth, email, password)
      });
      return '';
    } catch (err) {
      return err as string;
    }
  }
}
