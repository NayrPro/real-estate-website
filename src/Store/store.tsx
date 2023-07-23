import { combineReducers, configureStore } from '@reduxjs/toolkit'
import propertiesReducer from './reducers/propertiesReducer'
import filtersReducers from './reducers/filtersReducers'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import commentReducer from './reducers/commentReducer'
import transactionReducer from './reducers/transactionReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};



const rootReducer = combineReducers({properties: propertiesReducer,
    filters: filtersReducers,
    posts: blogReducer,
    user: userReducer,
    comments: commentReducer,
    transactions: transactionReducer
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch