
import { configureStore } from '@reduxjs/toolkit';
import artistReducer from './artistSlice'
interface ArtistInput {
    artist1: string;
    artist2: string;
  }
  
const initialState: ArtistInput = {
  artist1: '',
  artist2: '',
};

export const store = configureStore({
    reducer: {
      artists: artistReducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch