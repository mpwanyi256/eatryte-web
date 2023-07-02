import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  Firestore,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

import appConfig from "@/config/appConfig";

let db: Firestore | null = null;

export const initializeFirebase = () => {
  const firebaseApp = initializeApp(appConfig.fb);
  getAnalytics(firebaseApp);

  //  Setup offline persistence
  initializeFirestore(firebaseApp, {
    localCache: persistentLocalCache(
      /*settings*/ { tabManager: persistentMultipleTabManager() }
    ),
  });
  db = getFirestore(firebaseApp);

  return db;
};
