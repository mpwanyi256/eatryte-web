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
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import appConfig from "@/config/appConfig";
import store from "@/store";
import router from "@/router";
import { User } from "@/store/types";

export const initializeFirebase = () => {
  const firebaseApp = initializeApp(appConfig.fb);
  const analytics = getAnalytics(firebaseApp);

  //  Setup offline persistence
  initializeFirestore(firebaseApp, {
    localCache: persistentLocalCache(
      /*settings*/ { tabManager: persistentMultipleTabManager() }
    ),
  });
  const db = getFirestore(firebaseApp);

  // Listen to auth state changes
  const auth = getAuth();
  onAuthStateChanged(auth, async (userAccount) => {
    if (userAccount) {
      // If user is logged in
      const { email, uid, emailVerified, photoURL } = userAccount;
      const user: User = {
        email,
        id: uid,
        emailVerified,
      };
      // Get user profile
      const colRef = collection(db, "profiles");
      const profileCollectionRef = doc(colRef, uid);
      const docSnap = await getDoc(profileCollectionRef);
      let redirectToPage = "home";

      if (docSnap.exists()) {
        user.profile = docSnap.data();
      } else {
        redirectToPage = "profile";
        const newProfile = {
          email,
          firstName: "",
          lastName: "",
          mobileNumber: "",
          photoURL,
        };
        setDoc(doc(db, "profiles", uid), newProfile)
          .then(() => {
            user.profile = newProfile;
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }

      store.commit("auth/setUser", user);
      router.replace({ name: redirectToPage });
    } else {
      store.commit("auth/setUser", null);
    }
  });

  return {
    firebaseApp,
    analytics,
    db,
  };
};
