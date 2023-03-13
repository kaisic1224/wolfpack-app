'use client'
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { db, auth } from "@/lib/firebase/config";
import signIn from '@/lib/firebase/authenticate'
import { collection, getDocs } from "firebase/firestore";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const inter = Inter({ subsets: ["latin"] });

// const test = async () => {
//   const colref = collection(db, "admins");

//   const docs = await getDocs(colref);

//   const data: any[] = [];
//   docs.forEach((doc) => {
//     data.push({ ...doc.data(), id: doc.id });
//   });

//   return data;
// };

export default function Home() {
  // const userData = test();

  // const users = await Promise.all([userData]);

  // console.log(users);
  return (
    <main className={styles.main}>
            <button
      onClick={async() => {
        const provider = new GoogleAuthProvider();
        const res = await signIn();
        console.log(res);
      }}
      >sign in</button>
    </main>
  );
}
