import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { writable } from 'svelte/store';

const firebaseConfig = {
	apiKey: 'AIzaSyBWKYFNHbWQ0JHeBzQcOChf__a-hLZ0664',
	authDomain: 'stockhunter-a3bab.firebaseapp.com',
	projectId: 'stockhunter-a3bab',
	storageBucket: 'stockhunter-a3bab.appspot.com',
	messagingSenderId: '834780610894',
	appId: '1:834780610894:web:b523987ffc5239856b1e1f',
	measurementId: 'G-322T2Y2CGG'
};

const app = initializeApp(firebaseConfig);

export const user = writable({
	username: '',
	password: '',
	email: ''
});
