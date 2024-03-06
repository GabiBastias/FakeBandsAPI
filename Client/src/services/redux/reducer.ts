import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FakeBand, FakeBandGenre, ResponseFakeBand } from '../../interfaces/fakeBand';
import { State } from '../../interfaces/redux';

const initialState: State = {
    allBandsCopy: [],
    allBands: [],
    allGenres: [],
    language: 'Spanish',
};

const fakeBandsReducer = createSlice({
    name: 'fakeBands',
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload;
        },
        setAllBands(state, action: PayloadAction<FakeBand[]>) {
            state.allBandsCopy = action.payload;
            state.allBands = action.payload;
        },
        setAllGenres(state, action: PayloadAction<FakeBandGenre[]>) {
            state.allGenres = action.payload;
        },
        ManupulateResponseFakeBand(state, action: PayloadAction<ResponseFakeBand>) {
            state.allBands = action.payload;
        },
    },
});

export const { 
    setLanguage, 
    setAllBands, 
    setAllGenres, 
    ManupulateResponseFakeBand,
} = fakeBandsReducer.actions;

export default fakeBandsReducer.reducer;