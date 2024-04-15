import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArtistInput {
  artist1: string;
  artist2: string;
}

const initialState: ArtistInput = {
  artist1: "",
  artist2: "",
};

export const artistSlice = createSlice({
  name: "issue",
  initialState,
  reducers: {
    setArtist1: (state, action: PayloadAction<string>) => {
      state.artist1 = action.payload;
    },
    setArtist2: (state, action: PayloadAction<string>) => {
      state.artist2 = action.payload;
    },
  },
});

// Part 4
export const { setArtist1, setArtist2 } = artistSlice.actions;
export default artistSlice.reducer;
