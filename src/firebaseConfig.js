import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// กำหนดค่าคอนฟิกของ Firebase
const firebaseConfig = {
apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
appId: import.meta.env.VITE_FIREBASE_APP_ID,
measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// กำหนด API_URL สำหรับ Backend
export const API_URL = import.meta.env.VITE_API_URL;

// ✅ เพิ่ม log เพื่อตรวจสอบค่า API_URL และ Firebase
console.log("🔥 API_URL:", API_URL);
console.log("🔥 Firebase Config:", firebaseConfig);

// เริ่มต้น Firebase
const app = initializeApp(firebaseConfig);

// Export โมดูลที่ใช้
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
