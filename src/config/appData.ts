import store from "@/store";

// Initialize App Data required for the app to run
(async () => {
   await Promise.all([
    store.dispatch("auth/getUser"),
    store.dispatch("app/getCountries"),
   ])
})();
