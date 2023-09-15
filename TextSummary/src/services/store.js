import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";
export const store = configureStore({
  // used to grab/get sonething spefici
  //setting up store - saves information regardin gthe application
  //   will only store this specific data
  reducer: { [articleApi.reducerPath]: articleApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
