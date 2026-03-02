// 1. Import fungsi yang dibutuhkan
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 2. Konfigurasi Firebase (Sudah sesuai data kamu)
const firebaseConfig = {
  apiKey: "AIzaSyCRtWU-r8ipqO3TZA4Q9e-pzuc2JpVIjmA",
  authDomain: "dataukm-b22bf.firebaseapp.com",
  projectId: "dataukm-b22bf",
  storageBucket: "dataukm-b22bf.firebasestorage.app",
  messagingSenderId: "799385772665",
  appId: "1:799385772665:web:a1325d7f55c3dc56b22aa8",
  measurementId: "G-871HPT1NJH"
};

// 3. Inisialisasi Firebase
// Kita gunakan cek getApps agar tidak terjadi error "Firebase App named '[DEFAULT]' already exists" di Next.js
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// 4. Ekspor Firestore database dengan nama 'db'
export const db = getFirestore(app);