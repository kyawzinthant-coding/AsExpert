import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyAwXTi1kjj_XTCwUwmyUGpo3msY3Mj-c24',
    authDomain: 'asexpert-ec844.firebaseapp.com',
    projectId: 'asexpert-ec844',
    storageBucket: 'asexpert-ec844.appspot.com',
    messagingSenderId: '794049363820',
    appId: '1:794049363820:web:29b29af05c00ef1423fd49',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
