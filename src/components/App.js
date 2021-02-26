import AppRouter from './AppRouter';
import {useState} from 'react';
import firebase from '../firebase';


function App() {
  const auth = firebase.auth();
  const [isLoggedIn,setIsLoggedIn] = useState(auth.currentUser);
  console.log(auth.currentUser);
  return (
    <AppRouter isLoggedIn={isLoggedIn}/> 
  );
}

export default App;
