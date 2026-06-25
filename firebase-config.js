import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfG1gFI4SoEdttmhwORZt92_9bgqJcsgw",
  authDomain: "call-9cc3b.firebaseapp.com",
  databaseURL: "https://call-9cc3b-default-rtdb.firebaseio.com",
  projectId: "call-9cc3b",
  storageBucket: "call-9cc3b.firebasestorage.app",
  messagingSenderId: "919168566449",
  appId: "1:919168566449:web:b57c4c4020bf3cace30e90",
  measurementId: "G-GYBCF1LG64"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

