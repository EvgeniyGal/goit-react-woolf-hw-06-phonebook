import { configureStore } from '@reduxjs/toolkit';
import phoneBookContext from './phone-book';
import filterContext from './filter';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'phoneBook',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  phoneBookContext.reducer
);

const store = configureStore({
  reducer: {
    phoneBook: persistedReducer,
    filter: filterContext.reducer,
  },
});

export default store;

export const persistor = persistStore(store);
