import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC7ZTJZvkTTn3xUB2hY5hq0UPBmbDD3v_A",
  authDomain: "dragon-news-react-2023.firebaseapp.com",
  projectId: "dragon-news-react-2023",
  storageBucket: "dragon-news-react-2023.appspot.com",
  messagingSenderId: "257602018285",
  appId: "1:257602018285:web:5f4da5fda86d6ef8c025e4"
};

const app = initializeApp(firebaseConfig);
export default app;