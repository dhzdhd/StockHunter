import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { writable } from 'svelte/store';
import { ENV_OBJ } from './constants';

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
export let userDetails: any;

export const user = writable({
  username: '',
  password: '',
  email: ''
});

export class Auth {
  public static async register(email: string, password: string, username: string): Promise<void> {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        userDetails = userCred;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  public static async login(email: string, password: string): Promise<void> {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        userDetails = userCred;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  public static async forgotPassword(email: string): Promise<void> {
    const a = 3;
  }
}
