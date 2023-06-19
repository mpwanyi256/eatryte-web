import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  doc,
  collection,
  getDoc,
  setDoc,
  Firestore,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import appConfig from "@/config/appConfig";
import store from "@/store";
import router from "@/router";
import { User } from "@/store/types";
import { UserTypes } from "@/store/enum";

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

  // Listen to auth state changes
  const auth = getAuth();
  onAuthStateChanged(auth, async (userAccount) => {
    if (userAccount && db) {
      localStorage.setItem("isLoggedin", "true");
      // Get current url path
      const currentPath = router.currentRoute.value.name as string;

      // If user is logged in
      const { email, uid, emailVerified, photoURL } = userAccount;
      const user: User = {
        email,
        id: uid,
        emailVerified,
        type: UserTypes.USER,
        profile: {},
      };
      // Get user profile
      const colRef = collection(db, "profiles");
      const profileCollectionRef = doc(colRef, uid);
      const docSnap = await getDoc(profileCollectionRef);

      if (docSnap.exists()) {
        user.profile = docSnap.data();
      } else {
        const newProfile = {
          email,
          firstName: "",
          lastName: "",
          mobileNumber: "",
          photoURL,
          type: UserTypes.USER,
        };
        if (currentPath !== "signup") {
          setDoc(doc(db, "profiles", uid), newProfile).then(() => {
            user.profile = newProfile;
          });
        }
      }
      if (currentPath === "login" || currentPath === "signup") {
        router.replace({ name: "home" });
      }
      store.commit("auth/setUser", user);
    } else {
      store.commit("auth/setUser", null);
    }
  });

  return db;
};
