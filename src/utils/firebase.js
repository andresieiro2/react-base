import firebase from 'firebase';

import env from '../env';

firebase.initializeApp(env.config);

export default firebase;
