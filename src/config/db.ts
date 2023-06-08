import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore/lite";

import appConfig from "@/config/appConfig";

export const initializeFirebase = () => {
  console.log("Initializing firebase...");
  const firebaseApp = initializeApp(appConfig.fb);
  const analytics = getAnalytics(firebaseApp);

  //  Setup offline persistence
  initializeFirestore(firebaseApp, {
    localCache: persistentLocalCache(
      /*settings*/ { tabManager: persistentMultipleTabManager() }
    ),
  });
  const db = getFirestore(firebaseApp);
  console.log("Firebase initialized successfully!");
  return { firebaseApp, analytics, db };
};
