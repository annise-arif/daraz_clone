import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: 'AIzaSyBuMLWRJySGufzPsnpYSG0QtMA3jTrev2Y',
	authDomain: 'daraz-clone-4d017.firebaseapp.com',
	projectId: 'daraz-clone-4d017',
	storageBucket: 'daraz-clone-4d017.appspot.com',
	messagingSenderId: '769007939602',
	appId: '1:769007939602:web:d4d6f8a9127dc7b9bb68cb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;



// const clientSceret = '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';
// 	const clientId = '769007939602-t3ic9ujo1aefcpbi26fgim10lhd0ae6l.apps.googleusercontent.com';


// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
// };